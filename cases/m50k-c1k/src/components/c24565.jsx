import React from 'react';
const LABEL_24565 = 'component_24565';
export function Component24565({ value = 24565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24565, 'data-value': derived.doubled }, children);
}
export default Component24565;
