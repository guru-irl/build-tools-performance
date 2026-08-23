import React from 'react';
const LABEL_35909 = 'component_35909';
export function Component35909({ value = 35909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35909, 'data-value': derived.doubled }, children);
}
export default Component35909;
