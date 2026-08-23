import React from 'react';
const LABEL_2905 = 'component_2905';
export function Component2905({ value = 2905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2905, 'data-value': derived.doubled }, children);
}
export default Component2905;
