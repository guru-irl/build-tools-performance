import React from 'react';
const LABEL_46276 = 'component_46276';
export function Component46276({ value = 46276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46276, 'data-value': derived.doubled }, children);
}
export default Component46276;
