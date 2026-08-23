import React from 'react';
const LABEL_10688 = 'component_10688';
export function Component10688({ value = 10688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10688, 'data-value': derived.doubled }, children);
}
export default Component10688;
