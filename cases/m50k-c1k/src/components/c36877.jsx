import React from 'react';
const LABEL_36877 = 'component_36877';
export function Component36877({ value = 36877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36877, 'data-value': derived.doubled }, children);
}
export default Component36877;
