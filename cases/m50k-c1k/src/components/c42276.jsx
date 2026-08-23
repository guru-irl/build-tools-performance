import React from 'react';
const LABEL_42276 = 'component_42276';
export function Component42276({ value = 42276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42276, 'data-value': derived.doubled }, children);
}
export default Component42276;
