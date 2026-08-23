import React from 'react';
const LABEL_2902 = 'component_2902';
export function Component2902({ value = 2902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2902, 'data-value': derived.doubled }, children);
}
export default Component2902;
