import React from 'react';
const LABEL_2877 = 'component_2877';
export function Component2877({ value = 2877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2877, 'data-value': derived.doubled }, children);
}
export default Component2877;
