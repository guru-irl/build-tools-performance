import React from 'react';
const LABEL_36417 = 'component_36417';
export function Component36417({ value = 36417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36417, 'data-value': derived.doubled }, children);
}
export default Component36417;
