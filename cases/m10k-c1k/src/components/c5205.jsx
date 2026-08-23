import React from 'react';
const LABEL_5205 = 'component_5205';
export function Component5205({ value = 5205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5205, 'data-value': derived.doubled }, children);
}
export default Component5205;
