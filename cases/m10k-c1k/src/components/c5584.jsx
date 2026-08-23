import React from 'react';
const LABEL_5584 = 'component_5584';
export function Component5584({ value = 5584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5584, 'data-value': derived.doubled }, children);
}
export default Component5584;
