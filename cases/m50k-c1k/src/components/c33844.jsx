import React from 'react';
const LABEL_33844 = 'component_33844';
export function Component33844({ value = 33844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33844, 'data-value': derived.doubled }, children);
}
export default Component33844;
