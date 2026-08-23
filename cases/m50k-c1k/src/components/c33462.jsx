import React from 'react';
const LABEL_33462 = 'component_33462';
export function Component33462({ value = 33462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33462, 'data-value': derived.doubled }, children);
}
export default Component33462;
