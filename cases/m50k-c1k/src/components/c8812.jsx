import React from 'react';
const LABEL_8812 = 'component_8812';
export function Component8812({ value = 8812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8812, 'data-value': derived.doubled }, children);
}
export default Component8812;
