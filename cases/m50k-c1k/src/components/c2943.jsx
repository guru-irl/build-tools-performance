import React from 'react';
const LABEL_2943 = 'component_2943';
export function Component2943({ value = 2943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2943, 'data-value': derived.doubled }, children);
}
export default Component2943;
