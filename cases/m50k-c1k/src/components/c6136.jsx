import React from 'react';
const LABEL_6136 = 'component_6136';
export function Component6136({ value = 6136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6136, 'data-value': derived.doubled }, children);
}
export default Component6136;
