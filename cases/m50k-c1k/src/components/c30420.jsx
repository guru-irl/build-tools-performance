import React from 'react';
const LABEL_30420 = 'component_30420';
export function Component30420({ value = 30420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30420, 'data-value': derived.doubled }, children);
}
export default Component30420;
