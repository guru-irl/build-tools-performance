import React from 'react';
const LABEL_36833 = 'component_36833';
export function Component36833({ value = 36833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36833, 'data-value': derived.doubled }, children);
}
export default Component36833;
