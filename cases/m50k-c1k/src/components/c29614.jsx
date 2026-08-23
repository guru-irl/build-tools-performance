import React from 'react';
const LABEL_29614 = 'component_29614';
export function Component29614({ value = 29614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29614, 'data-value': derived.doubled }, children);
}
export default Component29614;
