import React from 'react';
const LABEL_5295 = 'component_5295';
export function Component5295({ value = 5295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5295, 'data-value': derived.doubled }, children);
}
export default Component5295;
