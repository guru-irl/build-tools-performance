import React from 'react';
const LABEL_16697 = 'component_16697';
export function Component16697({ value = 16697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16697, 'data-value': derived.doubled }, children);
}
export default Component16697;
