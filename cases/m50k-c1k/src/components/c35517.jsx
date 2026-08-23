import React from 'react';
const LABEL_35517 = 'component_35517';
export function Component35517({ value = 35517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35517, 'data-value': derived.doubled }, children);
}
export default Component35517;
