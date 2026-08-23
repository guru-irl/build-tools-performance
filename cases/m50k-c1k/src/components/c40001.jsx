import React from 'react';
const LABEL_40001 = 'component_40001';
export function Component40001({ value = 40001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40001, 'data-value': derived.doubled }, children);
}
export default Component40001;
