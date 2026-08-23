import React from 'react';
const LABEL_24826 = 'component_24826';
export function Component24826({ value = 24826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24826, 'data-value': derived.doubled }, children);
}
export default Component24826;
