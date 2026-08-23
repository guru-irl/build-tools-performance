import React from 'react';
const LABEL_29541 = 'component_29541';
export function Component29541({ value = 29541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29541, 'data-value': derived.doubled }, children);
}
export default Component29541;
