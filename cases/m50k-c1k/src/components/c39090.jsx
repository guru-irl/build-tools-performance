import React from 'react';
const LABEL_39090 = 'component_39090';
export function Component39090({ value = 39090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39090, 'data-value': derived.doubled }, children);
}
export default Component39090;
