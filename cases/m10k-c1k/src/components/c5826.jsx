import React from 'react';
const LABEL_5826 = 'component_5826';
export function Component5826({ value = 5826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5826, 'data-value': derived.doubled }, children);
}
export default Component5826;
