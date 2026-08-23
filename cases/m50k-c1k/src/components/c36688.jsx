import React from 'react';
const LABEL_36688 = 'component_36688';
export function Component36688({ value = 36688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36688, 'data-value': derived.doubled }, children);
}
export default Component36688;
