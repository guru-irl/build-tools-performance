import React from 'react';
const LABEL_2727 = 'component_2727';
export function Component2727({ value = 2727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2727, 'data-value': derived.doubled }, children);
}
export default Component2727;
