import React from 'react';
const LABEL_2668 = 'component_2668';
export function Component2668({ value = 2668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2668, 'data-value': derived.doubled }, children);
}
export default Component2668;
