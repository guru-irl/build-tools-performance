import React from 'react';
const LABEL_27484 = 'component_27484';
export function Component27484({ value = 27484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27484, 'data-value': derived.doubled }, children);
}
export default Component27484;
