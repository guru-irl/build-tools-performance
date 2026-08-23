import React from 'react';
const LABEL_31568 = 'component_31568';
export function Component31568({ value = 31568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31568, 'data-value': derived.doubled }, children);
}
export default Component31568;
