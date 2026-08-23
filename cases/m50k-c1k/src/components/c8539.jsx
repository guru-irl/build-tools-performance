import React from 'react';
const LABEL_8539 = 'component_8539';
export function Component8539({ value = 8539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8539, 'data-value': derived.doubled }, children);
}
export default Component8539;
