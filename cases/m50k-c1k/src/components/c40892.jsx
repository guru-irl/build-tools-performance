import React from 'react';
const LABEL_40892 = 'component_40892';
export function Component40892({ value = 40892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40892, 'data-value': derived.doubled }, children);
}
export default Component40892;
