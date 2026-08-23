import React from 'react';
const LABEL_37092 = 'component_37092';
export function Component37092({ value = 37092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37092, 'data-value': derived.doubled }, children);
}
export default Component37092;
