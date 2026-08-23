import React from 'react';
const LABEL_28624 = 'component_28624';
export function Component28624({ value = 28624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28624, 'data-value': derived.doubled }, children);
}
export default Component28624;
