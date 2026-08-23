import React from 'react';
const LABEL_35735 = 'component_35735';
export function Component35735({ value = 35735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35735, 'data-value': derived.doubled }, children);
}
export default Component35735;
