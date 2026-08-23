import React from 'react';
const LABEL_35560 = 'component_35560';
export function Component35560({ value = 35560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35560, 'data-value': derived.doubled }, children);
}
export default Component35560;
