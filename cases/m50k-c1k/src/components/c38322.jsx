import React from 'react';
const LABEL_38322 = 'component_38322';
export function Component38322({ value = 38322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38322, 'data-value': derived.doubled }, children);
}
export default Component38322;
