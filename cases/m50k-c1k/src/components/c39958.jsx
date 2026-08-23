import React from 'react';
const LABEL_39958 = 'component_39958';
export function Component39958({ value = 39958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39958, 'data-value': derived.doubled }, children);
}
export default Component39958;
