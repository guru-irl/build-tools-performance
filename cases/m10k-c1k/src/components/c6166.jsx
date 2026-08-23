import React from 'react';
const LABEL_6166 = 'component_6166';
export function Component6166({ value = 6166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6166, 'data-value': derived.doubled }, children);
}
export default Component6166;
