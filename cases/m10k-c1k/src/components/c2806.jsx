import React from 'react';
const LABEL_2806 = 'component_2806';
export function Component2806({ value = 2806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2806, 'data-value': derived.doubled }, children);
}
export default Component2806;
