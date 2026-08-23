import React from 'react';
const LABEL_36506 = 'component_36506';
export function Component36506({ value = 36506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36506, 'data-value': derived.doubled }, children);
}
export default Component36506;
