import React from 'react';
const LABEL_2925 = 'component_2925';
export function Component2925({ value = 2925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2925, 'data-value': derived.doubled }, children);
}
export default Component2925;
