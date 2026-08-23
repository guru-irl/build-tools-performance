import React from 'react';
const LABEL_8038 = 'component_8038';
export function Component8038({ value = 8038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8038, 'data-value': derived.doubled }, children);
}
export default Component8038;
