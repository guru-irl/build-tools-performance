import React from 'react';
const LABEL_21763 = 'component_21763';
export function Component21763({ value = 21763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21763, 'data-value': derived.doubled }, children);
}
export default Component21763;
