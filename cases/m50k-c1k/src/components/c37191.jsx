import React from 'react';
const LABEL_37191 = 'component_37191';
export function Component37191({ value = 37191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37191, 'data-value': derived.doubled }, children);
}
export default Component37191;
