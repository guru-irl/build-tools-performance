import React from 'react';
const LABEL_42560 = 'component_42560';
export function Component42560({ value = 42560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42560, 'data-value': derived.doubled }, children);
}
export default Component42560;
