import React from 'react';
const LABEL_43727 = 'component_43727';
export function Component43727({ value = 43727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43727, 'data-value': derived.doubled }, children);
}
export default Component43727;
