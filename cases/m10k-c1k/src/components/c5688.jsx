import React from 'react';
const LABEL_5688 = 'component_5688';
export function Component5688({ value = 5688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5688, 'data-value': derived.doubled }, children);
}
export default Component5688;
