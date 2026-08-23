import React from 'react';
const LABEL_34748 = 'component_34748';
export function Component34748({ value = 34748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34748, 'data-value': derived.doubled }, children);
}
export default Component34748;
