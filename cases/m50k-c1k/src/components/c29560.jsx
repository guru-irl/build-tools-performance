import React from 'react';
const LABEL_29560 = 'component_29560';
export function Component29560({ value = 29560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29560, 'data-value': derived.doubled }, children);
}
export default Component29560;
