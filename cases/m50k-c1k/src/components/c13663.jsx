import React from 'react';
const LABEL_13663 = 'component_13663';
export function Component13663({ value = 13663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13663, 'data-value': derived.doubled }, children);
}
export default Component13663;
