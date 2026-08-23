import React from 'react';
const LABEL_42283 = 'component_42283';
export function Component42283({ value = 42283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42283, 'data-value': derived.doubled }, children);
}
export default Component42283;
