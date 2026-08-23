import React from 'react';
const LABEL_30120 = 'component_30120';
export function Component30120({ value = 30120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30120, 'data-value': derived.doubled }, children);
}
export default Component30120;
