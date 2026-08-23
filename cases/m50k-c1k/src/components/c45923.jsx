import React from 'react';
const LABEL_45923 = 'component_45923';
export function Component45923({ value = 45923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45923, 'data-value': derived.doubled }, children);
}
export default Component45923;
