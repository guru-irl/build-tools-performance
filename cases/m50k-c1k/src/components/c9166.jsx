import React from 'react';
const LABEL_9166 = 'component_9166';
export function Component9166({ value = 9166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9166, 'data-value': derived.doubled }, children);
}
export default Component9166;
