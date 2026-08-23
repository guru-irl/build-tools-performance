import React from 'react';
const LABEL_3424 = 'component_3424';
export function Component3424({ value = 3424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3424, 'data-value': derived.doubled }, children);
}
export default Component3424;
