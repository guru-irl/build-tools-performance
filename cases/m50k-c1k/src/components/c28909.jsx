import React from 'react';
const LABEL_28909 = 'component_28909';
export function Component28909({ value = 28909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28909, 'data-value': derived.doubled }, children);
}
export default Component28909;
