import React from 'react';
const LABEL_5493 = 'component_5493';
export function Component5493({ value = 5493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5493, 'data-value': derived.doubled }, children);
}
export default Component5493;
