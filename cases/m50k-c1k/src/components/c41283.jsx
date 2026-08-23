import React from 'react';
const LABEL_41283 = 'component_41283';
export function Component41283({ value = 41283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41283, 'data-value': derived.doubled }, children);
}
export default Component41283;
