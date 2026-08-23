import React from 'react';
const LABEL_22871 = 'component_22871';
export function Component22871({ value = 22871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22871, 'data-value': derived.doubled }, children);
}
export default Component22871;
