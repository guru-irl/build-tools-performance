import React from 'react';
const LABEL_796 = 'component_796';
export function Component796({ value = 796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_796, 'data-value': derived.doubled }, children);
}
export default Component796;
