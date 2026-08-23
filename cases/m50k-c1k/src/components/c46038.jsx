import React from 'react';
const LABEL_46038 = 'component_46038';
export function Component46038({ value = 46038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46038, 'data-value': derived.doubled }, children);
}
export default Component46038;
