import React from 'react';
const LABEL_41183 = 'component_41183';
export function Component41183({ value = 41183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41183, 'data-value': derived.doubled }, children);
}
export default Component41183;
