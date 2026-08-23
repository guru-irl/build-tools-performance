import React from 'react';
const LABEL_13260 = 'component_13260';
export function Component13260({ value = 13260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13260, 'data-value': derived.doubled }, children);
}
export default Component13260;
