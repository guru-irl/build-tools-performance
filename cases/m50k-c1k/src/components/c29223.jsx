import React from 'react';
const LABEL_29223 = 'component_29223';
export function Component29223({ value = 29223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29223, 'data-value': derived.doubled }, children);
}
export default Component29223;
