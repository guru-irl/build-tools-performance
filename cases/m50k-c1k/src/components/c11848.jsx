import React from 'react';
const LABEL_11848 = 'component_11848';
export function Component11848({ value = 11848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11848, 'data-value': derived.doubled }, children);
}
export default Component11848;
