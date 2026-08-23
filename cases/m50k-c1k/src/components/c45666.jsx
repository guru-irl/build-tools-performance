import React from 'react';
const LABEL_45666 = 'component_45666';
export function Component45666({ value = 45666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45666, 'data-value': derived.doubled }, children);
}
export default Component45666;
