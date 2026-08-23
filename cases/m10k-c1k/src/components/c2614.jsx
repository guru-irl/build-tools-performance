import React from 'react';
const LABEL_2614 = 'component_2614';
export function Component2614({ value = 2614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2614, 'data-value': derived.doubled }, children);
}
export default Component2614;
