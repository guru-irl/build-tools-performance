import React from 'react';
const LABEL_35241 = 'component_35241';
export function Component35241({ value = 35241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35241, 'data-value': derived.doubled }, children);
}
export default Component35241;
