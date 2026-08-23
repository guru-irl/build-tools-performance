import React from 'react';
const LABEL_26928 = 'component_26928';
export function Component26928({ value = 26928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26928, 'data-value': derived.doubled }, children);
}
export default Component26928;
