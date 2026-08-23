import React from 'react';
const LABEL_15763 = 'component_15763';
export function Component15763({ value = 15763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15763, 'data-value': derived.doubled }, children);
}
export default Component15763;
