import React from 'react';
const LABEL_4435 = 'component_4435';
export function Component4435({ value = 4435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4435, 'data-value': derived.doubled }, children);
}
export default Component4435;
