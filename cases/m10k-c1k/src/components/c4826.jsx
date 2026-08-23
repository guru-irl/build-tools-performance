import React from 'react';
const LABEL_4826 = 'component_4826';
export function Component4826({ value = 4826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4826, 'data-value': derived.doubled }, children);
}
export default Component4826;
