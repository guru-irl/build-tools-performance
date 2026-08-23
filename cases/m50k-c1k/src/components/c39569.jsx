import React from 'react';
const LABEL_39569 = 'component_39569';
export function Component39569({ value = 39569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39569, 'data-value': derived.doubled }, children);
}
export default Component39569;
