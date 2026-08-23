import React from 'react';
const LABEL_37298 = 'component_37298';
export function Component37298({ value = 37298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37298, 'data-value': derived.doubled }, children);
}
export default Component37298;
