import React from 'react';
const LABEL_35871 = 'component_35871';
export function Component35871({ value = 35871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35871, 'data-value': derived.doubled }, children);
}
export default Component35871;
