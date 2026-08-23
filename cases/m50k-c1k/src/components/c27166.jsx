import React from 'react';
const LABEL_27166 = 'component_27166';
export function Component27166({ value = 27166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27166, 'data-value': derived.doubled }, children);
}
export default Component27166;
