import React from 'react';
const LABEL_7217 = 'component_7217';
export function Component7217({ value = 7217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7217, 'data-value': derived.doubled }, children);
}
export default Component7217;
