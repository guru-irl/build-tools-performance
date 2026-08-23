import React from 'react';
const LABEL_5419 = 'component_5419';
export function Component5419({ value = 5419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5419, 'data-value': derived.doubled }, children);
}
export default Component5419;
