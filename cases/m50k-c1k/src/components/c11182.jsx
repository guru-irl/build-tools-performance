import React from 'react';
const LABEL_11182 = 'component_11182';
export function Component11182({ value = 11182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11182, 'data-value': derived.doubled }, children);
}
export default Component11182;
