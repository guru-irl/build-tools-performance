import React from 'react';
const LABEL_2307 = 'component_2307';
export function Component2307({ value = 2307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2307, 'data-value': derived.doubled }, children);
}
export default Component2307;
