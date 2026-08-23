import React from 'react';
const LABEL_23687 = 'component_23687';
export function Component23687({ value = 23687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23687, 'data-value': derived.doubled }, children);
}
export default Component23687;
