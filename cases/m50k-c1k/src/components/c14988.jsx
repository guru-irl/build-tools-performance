import React from 'react';
const LABEL_14988 = 'component_14988';
export function Component14988({ value = 14988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14988, 'data-value': derived.doubled }, children);
}
export default Component14988;
