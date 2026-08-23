import React from 'react';
const LABEL_6150 = 'component_6150';
export function Component6150({ value = 6150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6150, 'data-value': derived.doubled }, children);
}
export default Component6150;
