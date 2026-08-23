import React from 'react';
const LABEL_4848 = 'component_4848';
export function Component4848({ value = 4848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4848, 'data-value': derived.doubled }, children);
}
export default Component4848;
