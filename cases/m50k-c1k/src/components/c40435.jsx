import React from 'react';
const LABEL_40435 = 'component_40435';
export function Component40435({ value = 40435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40435, 'data-value': derived.doubled }, children);
}
export default Component40435;
