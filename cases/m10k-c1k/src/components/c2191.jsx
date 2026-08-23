import React from 'react';
const LABEL_2191 = 'component_2191';
export function Component2191({ value = 2191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2191, 'data-value': derived.doubled }, children);
}
export default Component2191;
