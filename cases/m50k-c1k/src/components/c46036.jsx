import React from 'react';
const LABEL_46036 = 'component_46036';
export function Component46036({ value = 46036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46036, 'data-value': derived.doubled }, children);
}
export default Component46036;
