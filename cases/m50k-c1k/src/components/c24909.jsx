import React from 'react';
const LABEL_24909 = 'component_24909';
export function Component24909({ value = 24909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24909, 'data-value': derived.doubled }, children);
}
export default Component24909;
