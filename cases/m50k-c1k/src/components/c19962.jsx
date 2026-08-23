import React from 'react';
const LABEL_19962 = 'component_19962';
export function Component19962({ value = 19962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19962, 'data-value': derived.doubled }, children);
}
export default Component19962;
