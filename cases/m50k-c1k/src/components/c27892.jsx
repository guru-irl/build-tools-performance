import React from 'react';
const LABEL_27892 = 'component_27892';
export function Component27892({ value = 27892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27892, 'data-value': derived.doubled }, children);
}
export default Component27892;
