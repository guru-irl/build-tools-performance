import React from 'react';
const LABEL_13036 = 'component_13036';
export function Component13036({ value = 13036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13036, 'data-value': derived.doubled }, children);
}
export default Component13036;
