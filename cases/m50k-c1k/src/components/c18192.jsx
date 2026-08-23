import React from 'react';
const LABEL_18192 = 'component_18192';
export function Component18192({ value = 18192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18192, 'data-value': derived.doubled }, children);
}
export default Component18192;
