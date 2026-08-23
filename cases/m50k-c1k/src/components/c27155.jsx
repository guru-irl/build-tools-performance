import React from 'react';
const LABEL_27155 = 'component_27155';
export function Component27155({ value = 27155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27155, 'data-value': derived.doubled }, children);
}
export default Component27155;
