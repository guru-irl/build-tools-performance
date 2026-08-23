import React from 'react';
const LABEL_29239 = 'component_29239';
export function Component29239({ value = 29239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29239, 'data-value': derived.doubled }, children);
}
export default Component29239;
