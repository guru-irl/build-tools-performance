import React from 'react';
const LABEL_28883 = 'component_28883';
export function Component28883({ value = 28883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28883, 'data-value': derived.doubled }, children);
}
export default Component28883;
