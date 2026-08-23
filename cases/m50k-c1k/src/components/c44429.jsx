import React from 'react';
const LABEL_44429 = 'component_44429';
export function Component44429({ value = 44429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44429, 'data-value': derived.doubled }, children);
}
export default Component44429;
