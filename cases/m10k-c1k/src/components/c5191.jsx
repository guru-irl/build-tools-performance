import React from 'react';
const LABEL_5191 = 'component_5191';
export function Component5191({ value = 5191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5191, 'data-value': derived.doubled }, children);
}
export default Component5191;
