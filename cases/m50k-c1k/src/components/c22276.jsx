import React from 'react';
const LABEL_22276 = 'component_22276';
export function Component22276({ value = 22276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22276, 'data-value': derived.doubled }, children);
}
export default Component22276;
