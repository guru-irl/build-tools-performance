import React from 'react';
const LABEL_39402 = 'component_39402';
export function Component39402({ value = 39402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39402, 'data-value': derived.doubled }, children);
}
export default Component39402;
