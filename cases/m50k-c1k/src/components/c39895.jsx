import React from 'react';
const LABEL_39895 = 'component_39895';
export function Component39895({ value = 39895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39895, 'data-value': derived.doubled }, children);
}
export default Component39895;
