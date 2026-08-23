import React from 'react';
const LABEL_19695 = 'component_19695';
export function Component19695({ value = 19695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19695, 'data-value': derived.doubled }, children);
}
export default Component19695;
