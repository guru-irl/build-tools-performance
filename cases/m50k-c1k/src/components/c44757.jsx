import React from 'react';
const LABEL_44757 = 'component_44757';
export function Component44757({ value = 44757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44757, 'data-value': derived.doubled }, children);
}
export default Component44757;
