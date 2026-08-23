import React from 'react';
const LABEL_2687 = 'component_2687';
export function Component2687({ value = 2687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2687, 'data-value': derived.doubled }, children);
}
export default Component2687;
