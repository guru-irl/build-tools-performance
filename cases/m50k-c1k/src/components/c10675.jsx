import React from 'react';
const LABEL_10675 = 'component_10675';
export function Component10675({ value = 10675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10675, 'data-value': derived.doubled }, children);
}
export default Component10675;
