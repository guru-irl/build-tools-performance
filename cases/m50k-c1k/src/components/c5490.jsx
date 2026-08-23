import React from 'react';
const LABEL_5490 = 'component_5490';
export function Component5490({ value = 5490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5490, 'data-value': derived.doubled }, children);
}
export default Component5490;
