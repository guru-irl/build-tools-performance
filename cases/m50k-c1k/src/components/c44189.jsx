import React from 'react';
const LABEL_44189 = 'component_44189';
export function Component44189({ value = 44189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44189, 'data-value': derived.doubled }, children);
}
export default Component44189;
