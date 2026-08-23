import React from 'react';
const LABEL_29781 = 'component_29781';
export function Component29781({ value = 29781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29781, 'data-value': derived.doubled }, children);
}
export default Component29781;
