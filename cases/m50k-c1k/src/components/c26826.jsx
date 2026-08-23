import React from 'react';
const LABEL_26826 = 'component_26826';
export function Component26826({ value = 26826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26826, 'data-value': derived.doubled }, children);
}
export default Component26826;
