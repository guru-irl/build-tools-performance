import React from 'react';
const LABEL_8276 = 'component_8276';
export function Component8276({ value = 8276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8276, 'data-value': derived.doubled }, children);
}
export default Component8276;
