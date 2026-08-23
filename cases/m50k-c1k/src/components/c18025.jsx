import React from 'react';
const LABEL_18025 = 'component_18025';
export function Component18025({ value = 18025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18025, 'data-value': derived.doubled }, children);
}
export default Component18025;
