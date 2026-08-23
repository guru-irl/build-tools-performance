import React from 'react';
const LABEL_23520 = 'component_23520';
export function Component23520({ value = 23520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23520, 'data-value': derived.doubled }, children);
}
export default Component23520;
