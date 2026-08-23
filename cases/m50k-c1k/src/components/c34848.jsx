import React from 'react';
const LABEL_34848 = 'component_34848';
export function Component34848({ value = 34848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34848, 'data-value': derived.doubled }, children);
}
export default Component34848;
