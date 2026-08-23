import React from 'react';
const LABEL_19731 = 'component_19731';
export function Component19731({ value = 19731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19731, 'data-value': derived.doubled }, children);
}
export default Component19731;
