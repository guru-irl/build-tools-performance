import React from 'react';
const LABEL_2876 = 'component_2876';
export function Component2876({ value = 2876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2876, 'data-value': derived.doubled }, children);
}
export default Component2876;
