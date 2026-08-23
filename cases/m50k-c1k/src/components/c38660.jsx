import React from 'react';
const LABEL_38660 = 'component_38660';
export function Component38660({ value = 38660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38660, 'data-value': derived.doubled }, children);
}
export default Component38660;
