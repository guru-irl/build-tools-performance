import React from 'react';
const LABEL_18541 = 'component_18541';
export function Component18541({ value = 18541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18541, 'data-value': derived.doubled }, children);
}
export default Component18541;
