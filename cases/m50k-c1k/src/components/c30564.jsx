import React from 'react';
const LABEL_30564 = 'component_30564';
export function Component30564({ value = 30564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30564, 'data-value': derived.doubled }, children);
}
export default Component30564;
