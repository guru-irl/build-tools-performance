import React from 'react';
const LABEL_5975 = 'component_5975';
export function Component5975({ value = 5975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5975, 'data-value': derived.doubled }, children);
}
export default Component5975;
