import React from 'react';
const LABEL_5288 = 'component_5288';
export function Component5288({ value = 5288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5288, 'data-value': derived.doubled }, children);
}
export default Component5288;
