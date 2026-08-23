import React from 'react';
const LABEL_19038 = 'component_19038';
export function Component19038({ value = 19038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19038, 'data-value': derived.doubled }, children);
}
export default Component19038;
