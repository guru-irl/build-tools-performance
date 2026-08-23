import React from 'react';
const LABEL_13673 = 'component_13673';
export function Component13673({ value = 13673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13673, 'data-value': derived.doubled }, children);
}
export default Component13673;
