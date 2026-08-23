import React from 'react';
const LABEL_33447 = 'component_33447';
export function Component33447({ value = 33447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33447, 'data-value': derived.doubled }, children);
}
export default Component33447;
