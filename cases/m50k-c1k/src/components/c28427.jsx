import React from 'react';
const LABEL_28427 = 'component_28427';
export function Component28427({ value = 28427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28427, 'data-value': derived.doubled }, children);
}
export default Component28427;
