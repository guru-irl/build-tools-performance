import React from 'react';
const LABEL_3781 = 'component_3781';
export function Component3781({ value = 3781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3781, 'data-value': derived.doubled }, children);
}
export default Component3781;
