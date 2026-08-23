import React from 'react';
const LABEL_40647 = 'component_40647';
export function Component40647({ value = 40647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40647, 'data-value': derived.doubled }, children);
}
export default Component40647;
