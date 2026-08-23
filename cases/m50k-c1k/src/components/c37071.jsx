import React from 'react';
const LABEL_37071 = 'component_37071';
export function Component37071({ value = 37071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37071, 'data-value': derived.doubled }, children);
}
export default Component37071;
