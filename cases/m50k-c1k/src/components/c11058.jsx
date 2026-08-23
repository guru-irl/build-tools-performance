import React from 'react';
const LABEL_11058 = 'component_11058';
export function Component11058({ value = 11058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11058, 'data-value': derived.doubled }, children);
}
export default Component11058;
