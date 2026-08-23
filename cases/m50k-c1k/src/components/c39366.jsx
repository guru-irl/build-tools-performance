import React from 'react';
const LABEL_39366 = 'component_39366';
export function Component39366({ value = 39366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39366, 'data-value': derived.doubled }, children);
}
export default Component39366;
