import React from 'react';
const LABEL_40178 = 'component_40178';
export function Component40178({ value = 40178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40178, 'data-value': derived.doubled }, children);
}
export default Component40178;
