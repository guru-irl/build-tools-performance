import React from 'react';
const LABEL_29080 = 'component_29080';
export function Component29080({ value = 29080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29080, 'data-value': derived.doubled }, children);
}
export default Component29080;
