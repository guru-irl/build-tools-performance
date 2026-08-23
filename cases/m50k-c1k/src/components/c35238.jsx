import React from 'react';
const LABEL_35238 = 'component_35238';
export function Component35238({ value = 35238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35238, 'data-value': derived.doubled }, children);
}
export default Component35238;
