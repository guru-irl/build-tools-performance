import React from 'react';
const LABEL_6202 = 'component_6202';
export function Component6202({ value = 6202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6202, 'data-value': derived.doubled }, children);
}
export default Component6202;
