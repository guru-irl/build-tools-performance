import React from 'react';
const LABEL_5914 = 'component_5914';
export function Component5914({ value = 5914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5914, 'data-value': derived.doubled }, children);
}
export default Component5914;
