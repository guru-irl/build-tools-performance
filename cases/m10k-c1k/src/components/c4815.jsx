import React from 'react';
const LABEL_4815 = 'component_4815';
export function Component4815({ value = 4815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4815, 'data-value': derived.doubled }, children);
}
export default Component4815;
