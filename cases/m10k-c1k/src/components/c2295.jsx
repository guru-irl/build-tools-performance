import React from 'react';
const LABEL_2295 = 'component_2295';
export function Component2295({ value = 2295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2295, 'data-value': derived.doubled }, children);
}
export default Component2295;
