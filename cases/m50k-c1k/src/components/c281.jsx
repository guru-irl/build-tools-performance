import React from 'react';
const LABEL_281 = 'component_281';
export function Component281({ value = 281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_281, 'data-value': derived.doubled }, children);
}
export default Component281;
