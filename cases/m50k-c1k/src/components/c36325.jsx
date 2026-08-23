import React from 'react';
const LABEL_36325 = 'component_36325';
export function Component36325({ value = 36325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36325, 'data-value': derived.doubled }, children);
}
export default Component36325;
