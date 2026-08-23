import React from 'react';
const LABEL_35419 = 'component_35419';
export function Component35419({ value = 35419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35419, 'data-value': derived.doubled }, children);
}
export default Component35419;
