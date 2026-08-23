import React from 'react';
const LABEL_20001 = 'component_20001';
export function Component20001({ value = 20001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20001, 'data-value': derived.doubled }, children);
}
export default Component20001;
