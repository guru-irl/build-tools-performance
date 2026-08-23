import React from 'react';
const LABEL_40088 = 'component_40088';
export function Component40088({ value = 40088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40088, 'data-value': derived.doubled }, children);
}
export default Component40088;
