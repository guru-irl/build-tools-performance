import React from 'react';
const LABEL_3196 = 'component_3196';
export function Component3196({ value = 3196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3196, 'data-value': derived.doubled }, children);
}
export default Component3196;
