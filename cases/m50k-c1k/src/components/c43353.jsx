import React from 'react';
const LABEL_43353 = 'component_43353';
export function Component43353({ value = 43353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43353, 'data-value': derived.doubled }, children);
}
export default Component43353;
