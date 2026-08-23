import React from 'react';
const LABEL_6364 = 'component_6364';
export function Component6364({ value = 6364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6364, 'data-value': derived.doubled }, children);
}
export default Component6364;
