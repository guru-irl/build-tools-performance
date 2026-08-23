import React from 'react';
const LABEL_11938 = 'component_11938';
export function Component11938({ value = 11938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11938, 'data-value': derived.doubled }, children);
}
export default Component11938;
