import React from 'react';
const LABEL_14918 = 'component_14918';
export function Component14918({ value = 14918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14918, 'data-value': derived.doubled }, children);
}
export default Component14918;
