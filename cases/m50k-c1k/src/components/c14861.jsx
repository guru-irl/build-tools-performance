import React from 'react';
const LABEL_14861 = 'component_14861';
export function Component14861({ value = 14861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14861, 'data-value': derived.doubled }, children);
}
export default Component14861;
