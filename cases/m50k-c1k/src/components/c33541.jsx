import React from 'react';
const LABEL_33541 = 'component_33541';
export function Component33541({ value = 33541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33541, 'data-value': derived.doubled }, children);
}
export default Component33541;
