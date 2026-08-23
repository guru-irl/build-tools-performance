import React from 'react';
const LABEL_3964 = 'component_3964';
export function Component3964({ value = 3964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3964, 'data-value': derived.doubled }, children);
}
export default Component3964;
