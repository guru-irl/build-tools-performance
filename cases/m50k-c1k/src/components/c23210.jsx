import React from 'react';
const LABEL_23210 = 'component_23210';
export function Component23210({ value = 23210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23210, 'data-value': derived.doubled }, children);
}
export default Component23210;
