import React from 'react';
const LABEL_7014 = 'component_7014';
export function Component7014({ value = 7014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7014, 'data-value': derived.doubled }, children);
}
export default Component7014;
