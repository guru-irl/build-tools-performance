import React from 'react';
const LABEL_4824 = 'component_4824';
export function Component4824({ value = 4824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4824, 'data-value': derived.doubled }, children);
}
export default Component4824;
