import React from 'react';
const LABEL_27141 = 'component_27141';
export function Component27141({ value = 27141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27141, 'data-value': derived.doubled }, children);
}
export default Component27141;
