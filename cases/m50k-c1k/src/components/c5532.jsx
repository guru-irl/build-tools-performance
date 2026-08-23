import React from 'react';
const LABEL_5532 = 'component_5532';
export function Component5532({ value = 5532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5532, 'data-value': derived.doubled }, children);
}
export default Component5532;
