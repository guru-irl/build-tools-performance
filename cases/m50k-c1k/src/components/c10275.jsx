import React from 'react';
const LABEL_10275 = 'component_10275';
export function Component10275({ value = 10275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10275, 'data-value': derived.doubled }, children);
}
export default Component10275;
