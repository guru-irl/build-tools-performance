import React from 'react';
const LABEL_22909 = 'component_22909';
export function Component22909({ value = 22909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22909, 'data-value': derived.doubled }, children);
}
export default Component22909;
