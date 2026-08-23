import React from 'react';
const LABEL_33645 = 'component_33645';
export function Component33645({ value = 33645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33645, 'data-value': derived.doubled }, children);
}
export default Component33645;
