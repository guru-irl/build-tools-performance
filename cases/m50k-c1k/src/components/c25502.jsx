import React from 'react';
const LABEL_25502 = 'component_25502';
export function Component25502({ value = 25502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25502, 'data-value': derived.doubled }, children);
}
export default Component25502;
