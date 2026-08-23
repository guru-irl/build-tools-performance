import React from 'react';
const LABEL_36419 = 'component_36419';
export function Component36419({ value = 36419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36419, 'data-value': derived.doubled }, children);
}
export default Component36419;
