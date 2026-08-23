import React from 'react';
const LABEL_13083 = 'component_13083';
export function Component13083({ value = 13083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13083, 'data-value': derived.doubled }, children);
}
export default Component13083;
