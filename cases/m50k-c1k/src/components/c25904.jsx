import React from 'react';
const LABEL_25904 = 'component_25904';
export function Component25904({ value = 25904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25904, 'data-value': derived.doubled }, children);
}
export default Component25904;
