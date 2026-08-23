import React from 'react';
const LABEL_30469 = 'component_30469';
export function Component30469({ value = 30469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30469, 'data-value': derived.doubled }, children);
}
export default Component30469;
