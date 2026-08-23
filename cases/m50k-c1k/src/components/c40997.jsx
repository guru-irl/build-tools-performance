import React from 'react';
const LABEL_40997 = 'component_40997';
export function Component40997({ value = 40997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40997, 'data-value': derived.doubled }, children);
}
export default Component40997;
