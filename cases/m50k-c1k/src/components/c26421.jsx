import React from 'react';
const LABEL_26421 = 'component_26421';
export function Component26421({ value = 26421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26421, 'data-value': derived.doubled }, children);
}
export default Component26421;
