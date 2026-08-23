import React from 'react';
const LABEL_18174 = 'component_18174';
export function Component18174({ value = 18174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18174, 'data-value': derived.doubled }, children);
}
export default Component18174;
