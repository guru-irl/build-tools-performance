import React from 'react';
const LABEL_27934 = 'component_27934';
export function Component27934({ value = 27934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27934, 'data-value': derived.doubled }, children);
}
export default Component27934;
