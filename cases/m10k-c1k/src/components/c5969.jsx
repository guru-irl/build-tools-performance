import React from 'react';
const LABEL_5969 = 'component_5969';
export function Component5969({ value = 5969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5969, 'data-value': derived.doubled }, children);
}
export default Component5969;
