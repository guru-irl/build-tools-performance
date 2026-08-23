import React from 'react';
const LABEL_25620 = 'component_25620';
export function Component25620({ value = 25620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25620, 'data-value': derived.doubled }, children);
}
export default Component25620;
