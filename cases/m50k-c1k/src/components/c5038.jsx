import React from 'react';
const LABEL_5038 = 'component_5038';
export function Component5038({ value = 5038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5038, 'data-value': derived.doubled }, children);
}
export default Component5038;
