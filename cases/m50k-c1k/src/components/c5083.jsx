import React from 'react';
const LABEL_5083 = 'component_5083';
export function Component5083({ value = 5083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5083, 'data-value': derived.doubled }, children);
}
export default Component5083;
