import React from 'react';
const LABEL_40541 = 'component_40541';
export function Component40541({ value = 40541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40541, 'data-value': derived.doubled }, children);
}
export default Component40541;
