import React from 'react';
const LABEL_39038 = 'component_39038';
export function Component39038({ value = 39038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39038, 'data-value': derived.doubled }, children);
}
export default Component39038;
