import React from 'react';
const LABEL_40704 = 'component_40704';
export function Component40704({ value = 40704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40704, 'data-value': derived.doubled }, children);
}
export default Component40704;
