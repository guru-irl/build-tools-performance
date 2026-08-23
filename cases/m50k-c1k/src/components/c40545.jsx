import React from 'react';
const LABEL_40545 = 'component_40545';
export function Component40545({ value = 40545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40545, 'data-value': derived.doubled }, children);
}
export default Component40545;
