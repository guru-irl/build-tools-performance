import React from 'react';
const LABEL_37412 = 'component_37412';
export function Component37412({ value = 37412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37412, 'data-value': derived.doubled }, children);
}
export default Component37412;
