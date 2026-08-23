import React from 'react';
const LABEL_26561 = 'component_26561';
export function Component26561({ value = 26561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26561, 'data-value': derived.doubled }, children);
}
export default Component26561;
