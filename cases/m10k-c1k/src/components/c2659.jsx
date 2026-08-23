import React from 'react';
const LABEL_2659 = 'component_2659';
export function Component2659({ value = 2659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2659, 'data-value': derived.doubled }, children);
}
export default Component2659;
