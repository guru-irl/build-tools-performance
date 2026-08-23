import React from 'react';
const LABEL_46532 = 'component_46532';
export function Component46532({ value = 46532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46532, 'data-value': derived.doubled }, children);
}
export default Component46532;
