import React from 'react';
const LABEL_30845 = 'component_30845';
export function Component30845({ value = 30845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30845, 'data-value': derived.doubled }, children);
}
export default Component30845;
