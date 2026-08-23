import React from 'react';
const LABEL_14191 = 'component_14191';
export function Component14191({ value = 14191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14191, 'data-value': derived.doubled }, children);
}
export default Component14191;
