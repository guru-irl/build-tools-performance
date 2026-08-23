import React from 'react';
const LABEL_46688 = 'component_46688';
export function Component46688({ value = 46688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46688, 'data-value': derived.doubled }, children);
}
export default Component46688;
