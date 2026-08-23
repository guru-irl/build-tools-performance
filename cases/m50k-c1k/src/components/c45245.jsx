import React from 'react';
const LABEL_45245 = 'component_45245';
export function Component45245({ value = 45245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45245, 'data-value': derived.doubled }, children);
}
export default Component45245;
