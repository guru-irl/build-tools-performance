import React from 'react';
const LABEL_19666 = 'component_19666';
export function Component19666({ value = 19666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19666, 'data-value': derived.doubled }, children);
}
export default Component19666;
