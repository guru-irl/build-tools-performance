import React from 'react';
const LABEL_318 = 'component_318';
export function Component318({ value = 318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_318, 'data-value': derived.doubled }, children);
}
export default Component318;
