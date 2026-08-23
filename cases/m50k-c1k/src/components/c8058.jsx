import React from 'react';
const LABEL_8058 = 'component_8058';
export function Component8058({ value = 8058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8058, 'data-value': derived.doubled }, children);
}
export default Component8058;
