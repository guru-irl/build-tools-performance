import React from 'react';
const LABEL_27223 = 'component_27223';
export function Component27223({ value = 27223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27223, 'data-value': derived.doubled }, children);
}
export default Component27223;
