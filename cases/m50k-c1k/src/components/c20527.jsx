import React from 'react';
const LABEL_20527 = 'component_20527';
export function Component20527({ value = 20527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20527, 'data-value': derived.doubled }, children);
}
export default Component20527;
