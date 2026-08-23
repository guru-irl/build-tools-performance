import React from 'react';
const LABEL_40283 = 'component_40283';
export function Component40283({ value = 40283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40283, 'data-value': derived.doubled }, children);
}
export default Component40283;
