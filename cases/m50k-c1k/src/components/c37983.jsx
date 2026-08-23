import React from 'react';
const LABEL_37983 = 'component_37983';
export function Component37983({ value = 37983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37983, 'data-value': derived.doubled }, children);
}
export default Component37983;
