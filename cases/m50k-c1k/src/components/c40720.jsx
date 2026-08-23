import React from 'react';
const LABEL_40720 = 'component_40720';
export function Component40720({ value = 40720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40720, 'data-value': derived.doubled }, children);
}
export default Component40720;
