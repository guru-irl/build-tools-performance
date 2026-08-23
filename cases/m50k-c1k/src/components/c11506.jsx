import React from 'react';
const LABEL_11506 = 'component_11506';
export function Component11506({ value = 11506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11506, 'data-value': derived.doubled }, children);
}
export default Component11506;
