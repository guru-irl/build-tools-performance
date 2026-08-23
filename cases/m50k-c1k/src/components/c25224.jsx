import React from 'react';
const LABEL_25224 = 'component_25224';
export function Component25224({ value = 25224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25224, 'data-value': derived.doubled }, children);
}
export default Component25224;
