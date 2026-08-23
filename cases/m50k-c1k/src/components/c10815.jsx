import React from 'react';
const LABEL_10815 = 'component_10815';
export function Component10815({ value = 10815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10815, 'data-value': derived.doubled }, children);
}
export default Component10815;
