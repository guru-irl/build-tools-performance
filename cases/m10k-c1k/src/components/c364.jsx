import React from 'react';
const LABEL_364 = 'component_364';
export function Component364({ value = 364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_364, 'data-value': derived.doubled }, children);
}
export default Component364;
