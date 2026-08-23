import React from 'react';
const LABEL_28472 = 'component_28472';
export function Component28472({ value = 28472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28472, 'data-value': derived.doubled }, children);
}
export default Component28472;
