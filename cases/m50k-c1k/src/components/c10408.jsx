import React from 'react';
const LABEL_10408 = 'component_10408';
export function Component10408({ value = 10408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10408, 'data-value': derived.doubled }, children);
}
export default Component10408;
