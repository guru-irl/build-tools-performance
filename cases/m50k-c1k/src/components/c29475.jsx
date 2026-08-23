import React from 'react';
const LABEL_29475 = 'component_29475';
export function Component29475({ value = 29475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29475, 'data-value': derived.doubled }, children);
}
export default Component29475;
