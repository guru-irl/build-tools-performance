import React from 'react';
const LABEL_40815 = 'component_40815';
export function Component40815({ value = 40815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40815, 'data-value': derived.doubled }, children);
}
export default Component40815;
