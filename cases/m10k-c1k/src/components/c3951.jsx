import React from 'react';
const LABEL_3951 = 'component_3951';
export function Component3951({ value = 3951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3951, 'data-value': derived.doubled }, children);
}
export default Component3951;
