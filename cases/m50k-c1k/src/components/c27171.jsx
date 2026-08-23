import React from 'react';
const LABEL_27171 = 'component_27171';
export function Component27171({ value = 27171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27171, 'data-value': derived.doubled }, children);
}
export default Component27171;
