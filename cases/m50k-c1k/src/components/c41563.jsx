import React from 'react';
const LABEL_41563 = 'component_41563';
export function Component41563({ value = 41563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41563, 'data-value': derived.doubled }, children);
}
export default Component41563;
