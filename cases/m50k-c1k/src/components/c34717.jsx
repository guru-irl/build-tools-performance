import React from 'react';
const LABEL_34717 = 'component_34717';
export function Component34717({ value = 34717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34717, 'data-value': derived.doubled }, children);
}
export default Component34717;
