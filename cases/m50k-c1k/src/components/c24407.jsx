import React from 'react';
const LABEL_24407 = 'component_24407';
export function Component24407({ value = 24407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24407, 'data-value': derived.doubled }, children);
}
export default Component24407;
