import React from 'react';
const LABEL_16454 = 'component_16454';
export function Component16454({ value = 16454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16454, 'data-value': derived.doubled }, children);
}
export default Component16454;
