import React from 'react';
const LABEL_35772 = 'component_35772';
export function Component35772({ value = 35772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35772, 'data-value': derived.doubled }, children);
}
export default Component35772;
