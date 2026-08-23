import React from 'react';
const LABEL_30388 = 'component_30388';
export function Component30388({ value = 30388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30388, 'data-value': derived.doubled }, children);
}
export default Component30388;
