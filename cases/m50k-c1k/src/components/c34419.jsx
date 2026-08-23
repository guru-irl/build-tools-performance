import React from 'react';
const LABEL_34419 = 'component_34419';
export function Component34419({ value = 34419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34419, 'data-value': derived.doubled }, children);
}
export default Component34419;
