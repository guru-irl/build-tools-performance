import React from 'react';
const LABEL_36166 = 'component_36166';
export function Component36166({ value = 36166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36166, 'data-value': derived.doubled }, children);
}
export default Component36166;
