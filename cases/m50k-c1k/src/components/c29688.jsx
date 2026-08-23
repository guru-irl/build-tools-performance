import React from 'react';
const LABEL_29688 = 'component_29688';
export function Component29688({ value = 29688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29688, 'data-value': derived.doubled }, children);
}
export default Component29688;
