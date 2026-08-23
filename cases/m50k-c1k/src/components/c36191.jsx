import React from 'react';
const LABEL_36191 = 'component_36191';
export function Component36191({ value = 36191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36191, 'data-value': derived.doubled }, children);
}
export default Component36191;
