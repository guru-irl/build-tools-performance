import React from 'react';
const LABEL_19801 = 'component_19801';
export function Component19801({ value = 19801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19801, 'data-value': derived.doubled }, children);
}
export default Component19801;
