import React from 'react';
const LABEL_19442 = 'component_19442';
export function Component19442({ value = 19442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19442, 'data-value': derived.doubled }, children);
}
export default Component19442;
