import React from 'react';
const LABEL_38178 = 'component_38178';
export function Component38178({ value = 38178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38178, 'data-value': derived.doubled }, children);
}
export default Component38178;
