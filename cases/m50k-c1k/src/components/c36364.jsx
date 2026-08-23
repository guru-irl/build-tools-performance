import React from 'react';
const LABEL_36364 = 'component_36364';
export function Component36364({ value = 36364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36364, 'data-value': derived.doubled }, children);
}
export default Component36364;
