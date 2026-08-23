import React from 'react';
const LABEL_14856 = 'component_14856';
export function Component14856({ value = 14856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14856, 'data-value': derived.doubled }, children);
}
export default Component14856;
