import React from 'react';
const LABEL_28432 = 'component_28432';
export function Component28432({ value = 28432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28432, 'data-value': derived.doubled }, children);
}
export default Component28432;
