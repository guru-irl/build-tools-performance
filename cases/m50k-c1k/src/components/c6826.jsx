import React from 'react';
const LABEL_6826 = 'component_6826';
export function Component6826({ value = 6826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6826, 'data-value': derived.doubled }, children);
}
export default Component6826;
