import React from 'react';
const LABEL_14083 = 'component_14083';
export function Component14083({ value = 14083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14083, 'data-value': derived.doubled }, children);
}
export default Component14083;
