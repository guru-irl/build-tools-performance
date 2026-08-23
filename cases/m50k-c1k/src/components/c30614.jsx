import React from 'react';
const LABEL_30614 = 'component_30614';
export function Component30614({ value = 30614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30614, 'data-value': derived.doubled }, children);
}
export default Component30614;
