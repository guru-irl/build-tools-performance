import React from 'react';
const LABEL_29539 = 'component_29539';
export function Component29539({ value = 29539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29539, 'data-value': derived.doubled }, children);
}
export default Component29539;
