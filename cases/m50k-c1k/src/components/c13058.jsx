import React from 'react';
const LABEL_13058 = 'component_13058';
export function Component13058({ value = 13058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13058, 'data-value': derived.doubled }, children);
}
export default Component13058;
