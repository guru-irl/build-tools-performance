import React from 'react';
const LABEL_26815 = 'component_26815';
export function Component26815({ value = 26815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26815, 'data-value': derived.doubled }, children);
}
export default Component26815;
