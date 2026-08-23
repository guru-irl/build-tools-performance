import React from 'react';
const LABEL_24378 = 'component_24378';
export function Component24378({ value = 24378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24378, 'data-value': derived.doubled }, children);
}
export default Component24378;
