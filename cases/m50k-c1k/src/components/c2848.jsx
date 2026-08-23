import React from 'react';
const LABEL_2848 = 'component_2848';
export function Component2848({ value = 2848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2848, 'data-value': derived.doubled }, children);
}
export default Component2848;
