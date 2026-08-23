import React from 'react';
const LABEL_2068 = 'component_2068';
export function Component2068({ value = 2068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2068, 'data-value': derived.doubled }, children);
}
export default Component2068;
