import React from 'react';
const LABEL_35227 = 'component_35227';
export function Component35227({ value = 35227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35227, 'data-value': derived.doubled }, children);
}
export default Component35227;
