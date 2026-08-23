import React from 'react';
const LABEL_11313 = 'component_11313';
export function Component11313({ value = 11313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11313, 'data-value': derived.doubled }, children);
}
export default Component11313;
