import React from 'react';
const LABEL_31938 = 'component_31938';
export function Component31938({ value = 31938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31938, 'data-value': derived.doubled }, children);
}
export default Component31938;
