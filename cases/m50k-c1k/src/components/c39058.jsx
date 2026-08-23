import React from 'react';
const LABEL_39058 = 'component_39058';
export function Component39058({ value = 39058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39058, 'data-value': derived.doubled }, children);
}
export default Component39058;
