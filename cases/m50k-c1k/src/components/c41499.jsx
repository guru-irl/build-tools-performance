import React from 'react';
const LABEL_41499 = 'component_41499';
export function Component41499({ value = 41499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41499, 'data-value': derived.doubled }, children);
}
export default Component41499;
