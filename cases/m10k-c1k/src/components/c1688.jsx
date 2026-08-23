import React from 'react';
const LABEL_1688 = 'component_1688';
export function Component1688({ value = 1688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1688, 'data-value': derived.doubled }, children);
}
export default Component1688;
