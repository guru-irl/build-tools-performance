import React from 'react';
const LABEL_23191 = 'component_23191';
export function Component23191({ value = 23191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23191, 'data-value': derived.doubled }, children);
}
export default Component23191;
