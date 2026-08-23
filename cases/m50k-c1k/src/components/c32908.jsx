import React from 'react';
const LABEL_32908 = 'component_32908';
export function Component32908({ value = 32908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32908, 'data-value': derived.doubled }, children);
}
export default Component32908;
