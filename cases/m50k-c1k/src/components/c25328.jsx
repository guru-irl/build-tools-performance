import React from 'react';
const LABEL_25328 = 'component_25328';
export function Component25328({ value = 25328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25328, 'data-value': derived.doubled }, children);
}
export default Component25328;
