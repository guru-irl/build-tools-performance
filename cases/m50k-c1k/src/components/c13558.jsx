import React from 'react';
const LABEL_13558 = 'component_13558';
export function Component13558({ value = 13558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13558, 'data-value': derived.doubled }, children);
}
export default Component13558;
