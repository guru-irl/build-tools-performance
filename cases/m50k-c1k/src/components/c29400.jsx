import React from 'react';
const LABEL_29400 = 'component_29400';
export function Component29400({ value = 29400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29400, 'data-value': derived.doubled }, children);
}
export default Component29400;
