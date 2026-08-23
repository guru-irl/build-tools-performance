import React from 'react';
const LABEL_4506 = 'component_4506';
export function Component4506({ value = 4506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4506, 'data-value': derived.doubled }, children);
}
export default Component4506;
