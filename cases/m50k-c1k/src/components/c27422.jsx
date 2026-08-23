import React from 'react';
const LABEL_27422 = 'component_27422';
export function Component27422({ value = 27422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27422, 'data-value': derived.doubled }, children);
}
export default Component27422;
