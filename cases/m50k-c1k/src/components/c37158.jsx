import React from 'react';
const LABEL_37158 = 'component_37158';
export function Component37158({ value = 37158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37158, 'data-value': derived.doubled }, children);
}
export default Component37158;
