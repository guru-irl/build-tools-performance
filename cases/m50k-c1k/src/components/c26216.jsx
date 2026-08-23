import React from 'react';
const LABEL_26216 = 'component_26216';
export function Component26216({ value = 26216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26216, 'data-value': derived.doubled }, children);
}
export default Component26216;
