import React from 'react';
const LABEL_25577 = 'component_25577';
export function Component25577({ value = 25577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25577, 'data-value': derived.doubled }, children);
}
export default Component25577;
