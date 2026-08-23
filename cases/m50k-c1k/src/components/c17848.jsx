import React from 'react';
const LABEL_17848 = 'component_17848';
export function Component17848({ value = 17848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17848, 'data-value': derived.doubled }, children);
}
export default Component17848;
