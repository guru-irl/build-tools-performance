import React from 'react';
const LABEL_25840 = 'component_25840';
export function Component25840({ value = 25840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25840, 'data-value': derived.doubled }, children);
}
export default Component25840;
