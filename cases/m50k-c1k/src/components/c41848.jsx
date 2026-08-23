import React from 'react';
const LABEL_41848 = 'component_41848';
export function Component41848({ value = 41848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41848, 'data-value': derived.doubled }, children);
}
export default Component41848;
