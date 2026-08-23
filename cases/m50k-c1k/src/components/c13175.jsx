import React from 'react';
const LABEL_13175 = 'component_13175';
export function Component13175({ value = 13175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13175, 'data-value': derived.doubled }, children);
}
export default Component13175;
