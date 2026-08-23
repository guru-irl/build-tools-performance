import React from 'react';
const LABEL_46058 = 'component_46058';
export function Component46058({ value = 46058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46058, 'data-value': derived.doubled }, children);
}
export default Component46058;
