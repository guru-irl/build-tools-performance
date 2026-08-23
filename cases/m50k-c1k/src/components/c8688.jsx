import React from 'react';
const LABEL_8688 = 'component_8688';
export function Component8688({ value = 8688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8688, 'data-value': derived.doubled }, children);
}
export default Component8688;
