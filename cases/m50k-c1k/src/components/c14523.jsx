import React from 'react';
const LABEL_14523 = 'component_14523';
export function Component14523({ value = 14523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14523, 'data-value': derived.doubled }, children);
}
export default Component14523;
