import React from 'react';
const LABEL_23870 = 'component_23870';
export function Component23870({ value = 23870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23870, 'data-value': derived.doubled }, children);
}
export default Component23870;
