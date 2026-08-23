import React from 'react';
const LABEL_7085 = 'component_7085';
export function Component7085({ value = 7085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7085, 'data-value': derived.doubled }, children);
}
export default Component7085;
