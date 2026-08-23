import React from 'react';
const LABEL_29249 = 'component_29249';
export function Component29249({ value = 29249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29249, 'data-value': derived.doubled }, children);
}
export default Component29249;
