import React from 'react';
const LABEL_27340 = 'component_27340';
export function Component27340({ value = 27340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27340, 'data-value': derived.doubled }, children);
}
export default Component27340;
