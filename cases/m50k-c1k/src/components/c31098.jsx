import React from 'react';
const LABEL_31098 = 'component_31098';
export function Component31098({ value = 31098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31098, 'data-value': derived.doubled }, children);
}
export default Component31098;
