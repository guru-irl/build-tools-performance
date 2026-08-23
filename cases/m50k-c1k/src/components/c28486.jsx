import React from 'react';
const LABEL_28486 = 'component_28486';
export function Component28486({ value = 28486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28486, 'data-value': derived.doubled }, children);
}
export default Component28486;
