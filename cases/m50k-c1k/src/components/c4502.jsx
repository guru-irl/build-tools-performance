import React from 'react';
const LABEL_4502 = 'component_4502';
export function Component4502({ value = 4502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4502, 'data-value': derived.doubled }, children);
}
export default Component4502;
