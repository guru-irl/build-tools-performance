import React from 'react';
const LABEL_26340 = 'component_26340';
export function Component26340({ value = 26340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26340, 'data-value': derived.doubled }, children);
}
export default Component26340;
