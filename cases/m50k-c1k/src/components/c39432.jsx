import React from 'react';
const LABEL_39432 = 'component_39432';
export function Component39432({ value = 39432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39432, 'data-value': derived.doubled }, children);
}
export default Component39432;
