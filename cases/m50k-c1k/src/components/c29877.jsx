import React from 'react';
const LABEL_29877 = 'component_29877';
export function Component29877({ value = 29877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29877, 'data-value': derived.doubled }, children);
}
export default Component29877;
