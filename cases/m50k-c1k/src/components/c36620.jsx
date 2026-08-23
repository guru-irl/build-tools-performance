import React from 'react';
const LABEL_36620 = 'component_36620';
export function Component36620({ value = 36620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36620, 'data-value': derived.doubled }, children);
}
export default Component36620;
