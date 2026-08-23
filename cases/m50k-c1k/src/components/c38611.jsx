import React from 'react';
const LABEL_38611 = 'component_38611';
export function Component38611({ value = 38611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38611, 'data-value': derived.doubled }, children);
}
export default Component38611;
