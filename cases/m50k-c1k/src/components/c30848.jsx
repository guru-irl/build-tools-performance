import React from 'react';
const LABEL_30848 = 'component_30848';
export function Component30848({ value = 30848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30848, 'data-value': derived.doubled }, children);
}
export default Component30848;
