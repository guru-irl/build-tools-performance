import React from 'react';
const LABEL_29463 = 'component_29463';
export function Component29463({ value = 29463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29463, 'data-value': derived.doubled }, children);
}
export default Component29463;
