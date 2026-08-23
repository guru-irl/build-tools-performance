import React from 'react';
const LABEL_40067 = 'component_40067';
export function Component40067({ value = 40067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40067, 'data-value': derived.doubled }, children);
}
export default Component40067;
