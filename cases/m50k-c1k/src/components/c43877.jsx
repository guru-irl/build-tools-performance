import React from 'react';
const LABEL_43877 = 'component_43877';
export function Component43877({ value = 43877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43877, 'data-value': derived.doubled }, children);
}
export default Component43877;
