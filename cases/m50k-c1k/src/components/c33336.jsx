import React from 'react';
const LABEL_33336 = 'component_33336';
export function Component33336({ value = 33336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33336, 'data-value': derived.doubled }, children);
}
export default Component33336;
