import React from 'react';
const LABEL_7242 = 'component_7242';
export function Component7242({ value = 7242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7242, 'data-value': derived.doubled }, children);
}
export default Component7242;
