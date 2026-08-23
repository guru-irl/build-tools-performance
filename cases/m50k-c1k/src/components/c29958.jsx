import React from 'react';
const LABEL_29958 = 'component_29958';
export function Component29958({ value = 29958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29958, 'data-value': derived.doubled }, children);
}
export default Component29958;
