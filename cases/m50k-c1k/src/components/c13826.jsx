import React from 'react';
const LABEL_13826 = 'component_13826';
export function Component13826({ value = 13826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13826, 'data-value': derived.doubled }, children);
}
export default Component13826;
