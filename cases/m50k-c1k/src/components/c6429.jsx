import React from 'react';
const LABEL_6429 = 'component_6429';
export function Component6429({ value = 6429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6429, 'data-value': derived.doubled }, children);
}
export default Component6429;
