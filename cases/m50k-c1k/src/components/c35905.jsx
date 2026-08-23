import React from 'react';
const LABEL_35905 = 'component_35905';
export function Component35905({ value = 35905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35905, 'data-value': derived.doubled }, children);
}
export default Component35905;
