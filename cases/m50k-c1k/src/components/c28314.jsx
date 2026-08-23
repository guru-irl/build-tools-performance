import React from 'react';
const LABEL_28314 = 'component_28314';
export function Component28314({ value = 28314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28314, 'data-value': derived.doubled }, children);
}
export default Component28314;
