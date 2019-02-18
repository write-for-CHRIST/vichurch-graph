import {getUserId, Context} from '../../utils';

export const activitySchedule = {
  async addActivitySchedule(
    parent,
    {activityTypeId, start, end},
    ctx: Context,
    info,
  ) {
    const userId = getUserId(ctx);
    if (userId) {
      return ctx.prisma.createActivitySchedule({
        activity: {connect: {id: activityTypeId}},
        start,
        end,
      });
    } else {
      throw new Error('Not authorized user!');
    }
  },
};
