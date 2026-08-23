import React from 'react';
const LABEL_33014 = 'component_33014';
export function Component33014({ value = 33014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33014, 'data-value': derived.doubled }, children);
}
export default Component33014;
