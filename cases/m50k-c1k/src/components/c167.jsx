import React from 'react';
const LABEL_167 = 'component_167';
export function Component167({ value = 167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_167, 'data-value': derived.doubled }, children);
}
export default Component167;
