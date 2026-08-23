import React from 'react';
const LABEL_35848 = 'component_35848';
export function Component35848({ value = 35848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35848, 'data-value': derived.doubled }, children);
}
export default Component35848;
