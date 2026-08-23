import React from 'react';
const LABEL_28848 = 'component_28848';
export function Component28848({ value = 28848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28848, 'data-value': derived.doubled }, children);
}
export default Component28848;
