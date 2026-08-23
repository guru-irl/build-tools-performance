import React from 'react';
const LABEL_4560 = 'component_4560';
export function Component4560({ value = 4560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4560, 'data-value': derived.doubled }, children);
}
export default Component4560;
