import React from 'react';
const LABEL_24697 = 'component_24697';
export function Component24697({ value = 24697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24697, 'data-value': derived.doubled }, children);
}
export default Component24697;
