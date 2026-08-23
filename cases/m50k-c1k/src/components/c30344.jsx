import React from 'react';
const LABEL_30344 = 'component_30344';
export function Component30344({ value = 30344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30344, 'data-value': derived.doubled }, children);
}
export default Component30344;
