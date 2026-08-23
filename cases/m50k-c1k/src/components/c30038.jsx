import React from 'react';
const LABEL_30038 = 'component_30038';
export function Component30038({ value = 30038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30038, 'data-value': derived.doubled }, children);
}
export default Component30038;
