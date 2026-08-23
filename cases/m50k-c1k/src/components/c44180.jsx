import React from 'react';
const LABEL_44180 = 'component_44180';
export function Component44180({ value = 44180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44180, 'data-value': derived.doubled }, children);
}
export default Component44180;
