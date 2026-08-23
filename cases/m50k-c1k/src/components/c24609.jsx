import React from 'react';
const LABEL_24609 = 'component_24609';
export function Component24609({ value = 24609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24609, 'data-value': derived.doubled }, children);
}
export default Component24609;
