import React from 'react';
const LABEL_33670 = 'component_33670';
export function Component33670({ value = 33670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33670, 'data-value': derived.doubled }, children);
}
export default Component33670;
