import React from 'react';
const LABEL_33191 = 'component_33191';
export function Component33191({ value = 33191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33191, 'data-value': derived.doubled }, children);
}
export default Component33191;
