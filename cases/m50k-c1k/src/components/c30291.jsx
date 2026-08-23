import React from 'react';
const LABEL_30291 = 'component_30291';
export function Component30291({ value = 30291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30291, 'data-value': derived.doubled }, children);
}
export default Component30291;
