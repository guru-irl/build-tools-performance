import React from 'react';
const LABEL_38688 = 'component_38688';
export function Component38688({ value = 38688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38688, 'data-value': derived.doubled }, children);
}
export default Component38688;
