import React from 'react';
const LABEL_26001 = 'component_26001';
export function Component26001({ value = 26001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26001, 'data-value': derived.doubled }, children);
}
export default Component26001;
