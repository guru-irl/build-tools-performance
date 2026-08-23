import React from 'react';
const LABEL_14305 = 'component_14305';
export function Component14305({ value = 14305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14305, 'data-value': derived.doubled }, children);
}
export default Component14305;
