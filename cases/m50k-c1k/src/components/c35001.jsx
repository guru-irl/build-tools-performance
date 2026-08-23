import React from 'react';
const LABEL_35001 = 'component_35001';
export function Component35001({ value = 35001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35001, 'data-value': derived.doubled }, children);
}
export default Component35001;
