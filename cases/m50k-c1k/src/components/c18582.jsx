import React from 'react';
const LABEL_18582 = 'component_18582';
export function Component18582({ value = 18582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18582, 'data-value': derived.doubled }, children);
}
export default Component18582;
