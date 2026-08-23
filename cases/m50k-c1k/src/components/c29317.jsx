import React from 'react';
const LABEL_29317 = 'component_29317';
export function Component29317({ value = 29317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29317, 'data-value': derived.doubled }, children);
}
export default Component29317;
