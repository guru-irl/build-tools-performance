import React from 'react';
const LABEL_29878 = 'component_29878';
export function Component29878({ value = 29878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29878, 'data-value': derived.doubled }, children);
}
export default Component29878;
