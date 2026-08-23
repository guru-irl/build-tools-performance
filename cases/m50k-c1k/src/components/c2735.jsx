import React from 'react';
const LABEL_2735 = 'component_2735';
export function Component2735({ value = 2735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2735, 'data-value': derived.doubled }, children);
}
export default Component2735;
