import React from 'react';
const LABEL_2587 = 'component_2587';
export function Component2587({ value = 2587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2587, 'data-value': derived.doubled }, children);
}
export default Component2587;
