import React from 'react';
const LABEL_29241 = 'component_29241';
export function Component29241({ value = 29241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29241, 'data-value': derived.doubled }, children);
}
export default Component29241;
