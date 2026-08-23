import React from 'react';
const LABEL_30209 = 'component_30209';
export function Component30209({ value = 30209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30209, 'data-value': derived.doubled }, children);
}
export default Component30209;
