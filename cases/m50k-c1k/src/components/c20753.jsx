import React from 'react';
const LABEL_20753 = 'component_20753';
export function Component20753({ value = 20753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20753, 'data-value': derived.doubled }, children);
}
export default Component20753;
