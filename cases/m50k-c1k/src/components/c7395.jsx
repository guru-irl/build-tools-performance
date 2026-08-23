import React from 'react';
const LABEL_7395 = 'component_7395';
export function Component7395({ value = 7395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7395, 'data-value': derived.doubled }, children);
}
export default Component7395;
