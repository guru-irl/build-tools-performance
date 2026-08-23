import React from 'react';
const LABEL_27115 = 'component_27115';
export function Component27115({ value = 27115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27115, 'data-value': derived.doubled }, children);
}
export default Component27115;
