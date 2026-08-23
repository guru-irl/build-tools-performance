import React from 'react';
const LABEL_33224 = 'component_33224';
export function Component33224({ value = 33224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33224, 'data-value': derived.doubled }, children);
}
export default Component33224;
