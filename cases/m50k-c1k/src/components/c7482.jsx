import React from 'react';
const LABEL_7482 = 'component_7482';
export function Component7482({ value = 7482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7482, 'data-value': derived.doubled }, children);
}
export default Component7482;
