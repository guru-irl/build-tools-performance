import React from 'react';
const LABEL_20442 = 'component_20442';
export function Component20442({ value = 20442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20442, 'data-value': derived.doubled }, children);
}
export default Component20442;
