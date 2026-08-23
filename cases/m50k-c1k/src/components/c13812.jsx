import React from 'react';
const LABEL_13812 = 'component_13812';
export function Component13812({ value = 13812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13812, 'data-value': derived.doubled }, children);
}
export default Component13812;
