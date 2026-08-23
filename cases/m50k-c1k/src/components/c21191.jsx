import React from 'react';
const LABEL_21191 = 'component_21191';
export function Component21191({ value = 21191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21191, 'data-value': derived.doubled }, children);
}
export default Component21191;
