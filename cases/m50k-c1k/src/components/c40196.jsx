import React from 'react';
const LABEL_40196 = 'component_40196';
export function Component40196({ value = 40196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40196, 'data-value': derived.doubled }, children);
}
export default Component40196;
