import React from 'react';
const LABEL_35349 = 'component_35349';
export function Component35349({ value = 35349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35349, 'data-value': derived.doubled }, children);
}
export default Component35349;
