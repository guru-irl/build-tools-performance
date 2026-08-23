import React from 'react';
const LABEL_22210 = 'component_22210';
export function Component22210({ value = 22210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22210, 'data-value': derived.doubled }, children);
}
export default Component22210;
