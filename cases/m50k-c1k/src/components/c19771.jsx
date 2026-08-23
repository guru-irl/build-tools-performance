import React from 'react';
const LABEL_19771 = 'component_19771';
export function Component19771({ value = 19771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19771, 'data-value': derived.doubled }, children);
}
export default Component19771;
