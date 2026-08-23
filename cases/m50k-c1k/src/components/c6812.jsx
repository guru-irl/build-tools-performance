import React from 'react';
const LABEL_6812 = 'component_6812';
export function Component6812({ value = 6812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6812, 'data-value': derived.doubled }, children);
}
export default Component6812;
