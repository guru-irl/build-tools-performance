import React from 'react';
const LABEL_18647 = 'component_18647';
export function Component18647({ value = 18647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18647, 'data-value': derived.doubled }, children);
}
export default Component18647;
