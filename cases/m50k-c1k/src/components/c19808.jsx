import React from 'react';
const LABEL_19808 = 'component_19808';
export function Component19808({ value = 19808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19808, 'data-value': derived.doubled }, children);
}
export default Component19808;
