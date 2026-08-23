import React from 'react';
const LABEL_24713 = 'component_24713';
export function Component24713({ value = 24713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24713, 'data-value': derived.doubled }, children);
}
export default Component24713;
