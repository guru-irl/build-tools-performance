import React from 'react';
const LABEL_38914 = 'component_38914';
export function Component38914({ value = 38914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38914, 'data-value': derived.doubled }, children);
}
export default Component38914;
