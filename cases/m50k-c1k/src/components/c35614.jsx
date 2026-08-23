import React from 'react';
const LABEL_35614 = 'component_35614';
export function Component35614({ value = 35614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35614, 'data-value': derived.doubled }, children);
}
export default Component35614;
