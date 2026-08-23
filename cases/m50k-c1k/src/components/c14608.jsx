import React from 'react';
const LABEL_14608 = 'component_14608';
export function Component14608({ value = 14608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14608, 'data-value': derived.doubled }, children);
}
export default Component14608;
