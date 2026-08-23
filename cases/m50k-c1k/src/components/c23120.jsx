import React from 'react';
const LABEL_23120 = 'component_23120';
export function Component23120({ value = 23120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23120, 'data-value': derived.doubled }, children);
}
export default Component23120;
