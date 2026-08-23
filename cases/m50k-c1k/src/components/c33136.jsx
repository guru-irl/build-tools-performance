import React from 'react';
const LABEL_33136 = 'component_33136';
export function Component33136({ value = 33136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33136, 'data-value': derived.doubled }, children);
}
export default Component33136;
