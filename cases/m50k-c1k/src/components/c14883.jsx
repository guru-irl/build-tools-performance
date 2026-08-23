import React from 'react';
const LABEL_14883 = 'component_14883';
export function Component14883({ value = 14883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14883, 'data-value': derived.doubled }, children);
}
export default Component14883;
