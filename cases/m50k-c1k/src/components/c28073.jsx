import React from 'react';
const LABEL_28073 = 'component_28073';
export function Component28073({ value = 28073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28073, 'data-value': derived.doubled }, children);
}
export default Component28073;
