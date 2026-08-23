import React from 'react';
const LABEL_5641 = 'component_5641';
export function Component5641({ value = 5641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5641, 'data-value': derived.doubled }, children);
}
export default Component5641;
