import React from 'react';
const LABEL_41835 = 'component_41835';
export function Component41835({ value = 41835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41835, 'data-value': derived.doubled }, children);
}
export default Component41835;
