import React from 'react';
const LABEL_7909 = 'component_7909';
export function Component7909({ value = 7909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7909, 'data-value': derived.doubled }, children);
}
export default Component7909;
