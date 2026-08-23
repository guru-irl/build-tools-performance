import React from 'react';
const LABEL_38482 = 'component_38482';
export function Component38482({ value = 38482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38482, 'data-value': derived.doubled }, children);
}
export default Component38482;
