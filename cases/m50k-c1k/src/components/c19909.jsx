import React from 'react';
const LABEL_19909 = 'component_19909';
export function Component19909({ value = 19909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19909, 'data-value': derived.doubled }, children);
}
export default Component19909;
