import React from 'react';
const LABEL_31757 = 'component_31757';
export function Component31757({ value = 31757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31757, 'data-value': derived.doubled }, children);
}
export default Component31757;
