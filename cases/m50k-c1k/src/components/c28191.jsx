import React from 'react';
const LABEL_28191 = 'component_28191';
export function Component28191({ value = 28191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28191, 'data-value': derived.doubled }, children);
}
export default Component28191;
