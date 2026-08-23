import React from 'react';
const LABEL_20070 = 'component_20070';
export function Component20070({ value = 20070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20070, 'data-value': derived.doubled }, children);
}
export default Component20070;
