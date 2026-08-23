import React from 'react';
const LABEL_10772 = 'component_10772';
export function Component10772({ value = 10772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10772, 'data-value': derived.doubled }, children);
}
export default Component10772;
