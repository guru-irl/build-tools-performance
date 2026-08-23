import React from 'react';
const LABEL_40848 = 'component_40848';
export function Component40848({ value = 40848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40848, 'data-value': derived.doubled }, children);
}
export default Component40848;
