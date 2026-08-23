import React from 'react';
const LABEL_4058 = 'component_4058';
export function Component4058({ value = 4058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4058, 'data-value': derived.doubled }, children);
}
export default Component4058;
