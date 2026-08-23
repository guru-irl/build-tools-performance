import React from 'react';
const LABEL_35877 = 'component_35877';
export function Component35877({ value = 35877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35877, 'data-value': derived.doubled }, children);
}
export default Component35877;
