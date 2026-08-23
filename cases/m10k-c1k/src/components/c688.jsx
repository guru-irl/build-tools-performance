import React from 'react';
const LABEL_688 = 'component_688';
export function Component688({ value = 688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_688, 'data-value': derived.doubled }, children);
}
export default Component688;
