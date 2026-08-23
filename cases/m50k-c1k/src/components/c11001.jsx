import React from 'react';
const LABEL_11001 = 'component_11001';
export function Component11001({ value = 11001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11001, 'data-value': derived.doubled }, children);
}
export default Component11001;
