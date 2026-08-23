import React from 'react';
const LABEL_46202 = 'component_46202';
export function Component46202({ value = 46202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46202, 'data-value': derived.doubled }, children);
}
export default Component46202;
