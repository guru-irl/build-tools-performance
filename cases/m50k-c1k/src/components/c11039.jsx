import React from 'react';
const LABEL_11039 = 'component_11039';
export function Component11039({ value = 11039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11039, 'data-value': derived.doubled }, children);
}
export default Component11039;
