import React from 'react';
const LABEL_34938 = 'component_34938';
export function Component34938({ value = 34938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34938, 'data-value': derived.doubled }, children);
}
export default Component34938;
