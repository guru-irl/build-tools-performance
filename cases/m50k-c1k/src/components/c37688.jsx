import React from 'react';
const LABEL_37688 = 'component_37688';
export function Component37688({ value = 37688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37688, 'data-value': derived.doubled }, children);
}
export default Component37688;
