import React from 'react';
const LABEL_7058 = 'component_7058';
export function Component7058({ value = 7058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7058, 'data-value': derived.doubled }, children);
}
export default Component7058;
