import React from 'react';
const LABEL_38038 = 'component_38038';
export function Component38038({ value = 38038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38038, 'data-value': derived.doubled }, children);
}
export default Component38038;
