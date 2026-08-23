import React from 'react';
const LABEL_41493 = 'component_41493';
export function Component41493({ value = 41493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41493, 'data-value': derived.doubled }, children);
}
export default Component41493;
