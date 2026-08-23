import React from 'react';
const LABEL_40624 = 'component_40624';
export function Component40624({ value = 40624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40624, 'data-value': derived.doubled }, children);
}
export default Component40624;
