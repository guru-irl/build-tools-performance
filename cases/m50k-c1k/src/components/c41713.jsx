import React from 'react';
const LABEL_41713 = 'component_41713';
export function Component41713({ value = 41713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41713, 'data-value': derived.doubled }, children);
}
export default Component41713;
