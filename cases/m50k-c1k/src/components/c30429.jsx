import React from 'react';
const LABEL_30429 = 'component_30429';
export function Component30429({ value = 30429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30429, 'data-value': derived.doubled }, children);
}
export default Component30429;
