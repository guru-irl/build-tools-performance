import React from 'react';
const LABEL_41815 = 'component_41815';
export function Component41815({ value = 41815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41815, 'data-value': derived.doubled }, children);
}
export default Component41815;
