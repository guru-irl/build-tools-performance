import React from 'react';
const LABEL_30488 = 'component_30488';
export function Component30488({ value = 30488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30488, 'data-value': derived.doubled }, children);
}
export default Component30488;
