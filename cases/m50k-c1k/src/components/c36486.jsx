import React from 'react';
const LABEL_36486 = 'component_36486';
export function Component36486({ value = 36486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36486, 'data-value': derived.doubled }, children);
}
export default Component36486;
