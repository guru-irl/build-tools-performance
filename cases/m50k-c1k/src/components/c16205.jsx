import React from 'react';
const LABEL_16205 = 'component_16205';
export function Component16205({ value = 16205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16205, 'data-value': derived.doubled }, children);
}
export default Component16205;
