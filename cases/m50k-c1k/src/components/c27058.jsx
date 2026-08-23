import React from 'react';
const LABEL_27058 = 'component_27058';
export function Component27058({ value = 27058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27058, 'data-value': derived.doubled }, children);
}
export default Component27058;
