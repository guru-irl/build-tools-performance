import React from 'react';
const LABEL_16999 = 'component_16999';
export function Component16999({ value = 16999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16999, 'data-value': derived.doubled }, children);
}
export default Component16999;
