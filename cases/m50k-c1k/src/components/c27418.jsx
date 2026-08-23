import React from 'react';
const LABEL_27418 = 'component_27418';
export function Component27418({ value = 27418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27418, 'data-value': derived.doubled }, children);
}
export default Component27418;
