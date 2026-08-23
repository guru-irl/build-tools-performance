import React from 'react';
const LABEL_14001 = 'component_14001';
export function Component14001({ value = 14001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14001, 'data-value': derived.doubled }, children);
}
export default Component14001;
