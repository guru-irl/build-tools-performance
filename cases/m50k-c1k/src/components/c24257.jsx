import React from 'react';
const LABEL_24257 = 'component_24257';
export function Component24257({ value = 24257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24257, 'data-value': derived.doubled }, children);
}
export default Component24257;
