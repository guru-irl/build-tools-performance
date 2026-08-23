import React from 'react';
const LABEL_20270 = 'component_20270';
export function Component20270({ value = 20270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20270, 'data-value': derived.doubled }, children);
}
export default Component20270;
