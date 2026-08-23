import React from 'react';
const LABEL_5058 = 'component_5058';
export function Component5058({ value = 5058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5058, 'data-value': derived.doubled }, children);
}
export default Component5058;
