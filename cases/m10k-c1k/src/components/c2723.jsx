import React from 'react';
const LABEL_2723 = 'component_2723';
export function Component2723({ value = 2723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2723, 'data-value': derived.doubled }, children);
}
export default Component2723;
