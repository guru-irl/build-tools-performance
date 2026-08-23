import React from 'react';
const LABEL_24540 = 'component_24540';
export function Component24540({ value = 24540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24540, 'data-value': derived.doubled }, children);
}
export default Component24540;
