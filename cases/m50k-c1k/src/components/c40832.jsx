import React from 'react';
const LABEL_40832 = 'component_40832';
export function Component40832({ value = 40832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40832, 'data-value': derived.doubled }, children);
}
export default Component40832;
