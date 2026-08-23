import React from 'react';
const LABEL_19103 = 'component_19103';
export function Component19103({ value = 19103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19103, 'data-value': derived.doubled }, children);
}
export default Component19103;
