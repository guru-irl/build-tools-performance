import React from 'react';
const LABEL_5880 = 'component_5880';
export function Component5880({ value = 5880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5880, 'data-value': derived.doubled }, children);
}
export default Component5880;
