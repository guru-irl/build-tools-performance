import React from 'react';
const LABEL_5166 = 'component_5166';
export function Component5166({ value = 5166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5166, 'data-value': derived.doubled }, children);
}
export default Component5166;
