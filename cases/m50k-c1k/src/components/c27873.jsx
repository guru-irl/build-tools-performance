import React from 'react';
const LABEL_27873 = 'component_27873';
export function Component27873({ value = 27873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27873, 'data-value': derived.doubled }, children);
}
export default Component27873;
