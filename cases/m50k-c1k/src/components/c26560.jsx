import React from 'react';
const LABEL_26560 = 'component_26560';
export function Component26560({ value = 26560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26560, 'data-value': derived.doubled }, children);
}
export default Component26560;
