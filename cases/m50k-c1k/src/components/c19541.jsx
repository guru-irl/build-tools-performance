import React from 'react';
const LABEL_19541 = 'component_19541';
export function Component19541({ value = 19541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19541, 'data-value': derived.doubled }, children);
}
export default Component19541;
