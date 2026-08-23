import React from 'react';
const LABEL_21740 = 'component_21740';
export function Component21740({ value = 21740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21740, 'data-value': derived.doubled }, children);
}
export default Component21740;
