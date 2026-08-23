import React from 'react';
const LABEL_29347 = 'component_29347';
export function Component29347({ value = 29347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29347, 'data-value': derived.doubled }, children);
}
export default Component29347;
