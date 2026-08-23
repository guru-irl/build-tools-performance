import React from 'react';
const LABEL_29337 = 'component_29337';
export function Component29337({ value = 29337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29337, 'data-value': derived.doubled }, children);
}
export default Component29337;
