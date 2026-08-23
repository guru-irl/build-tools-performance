import React from 'react';
const LABEL_19121 = 'component_19121';
export function Component19121({ value = 19121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19121, 'data-value': derived.doubled }, children);
}
export default Component19121;
