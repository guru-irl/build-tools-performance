import React from 'react';
const LABEL_24200 = 'component_24200';
export function Component24200({ value = 24200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24200, 'data-value': derived.doubled }, children);
}
export default Component24200;
