import React from 'react';
const LABEL_45702 = 'component_45702';
export function Component45702({ value = 45702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45702, 'data-value': derived.doubled }, children);
}
export default Component45702;
