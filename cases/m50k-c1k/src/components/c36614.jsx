import React from 'react';
const LABEL_36614 = 'component_36614';
export function Component36614({ value = 36614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36614, 'data-value': derived.doubled }, children);
}
export default Component36614;
