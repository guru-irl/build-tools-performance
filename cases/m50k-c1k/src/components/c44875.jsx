import React from 'react';
const LABEL_44875 = 'component_44875';
export function Component44875({ value = 44875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44875, 'data-value': derived.doubled }, children);
}
export default Component44875;
