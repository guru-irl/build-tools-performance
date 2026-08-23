import React from 'react';
const LABEL_16564 = 'component_16564';
export function Component16564({ value = 16564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16564, 'data-value': derived.doubled }, children);
}
export default Component16564;
