import React from 'react';
const LABEL_41016 = 'component_41016';
export function Component41016({ value = 41016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41016, 'data-value': derived.doubled }, children);
}
export default Component41016;
