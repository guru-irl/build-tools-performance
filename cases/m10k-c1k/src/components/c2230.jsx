import React from 'react';
const LABEL_2230 = 'component_2230';
export function Component2230({ value = 2230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2230, 'data-value': derived.doubled }, children);
}
export default Component2230;
