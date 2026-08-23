import React from 'react';
const LABEL_741 = 'component_741';
export function Component741({ value = 741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_741, 'data-value': derived.doubled }, children);
}
export default Component741;
