import React from 'react';
const LABEL_10191 = 'component_10191';
export function Component10191({ value = 10191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10191, 'data-value': derived.doubled }, children);
}
export default Component10191;
