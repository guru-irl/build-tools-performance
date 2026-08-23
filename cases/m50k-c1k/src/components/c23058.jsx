import React from 'react';
const LABEL_23058 = 'component_23058';
export function Component23058({ value = 23058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23058, 'data-value': derived.doubled }, children);
}
export default Component23058;
