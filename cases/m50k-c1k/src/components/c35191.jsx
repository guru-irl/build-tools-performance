import React from 'react';
const LABEL_35191 = 'component_35191';
export function Component35191({ value = 35191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35191, 'data-value': derived.doubled }, children);
}
export default Component35191;
