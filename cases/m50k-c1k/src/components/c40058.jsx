import React from 'react';
const LABEL_40058 = 'component_40058';
export function Component40058({ value = 40058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40058, 'data-value': derived.doubled }, children);
}
export default Component40058;
