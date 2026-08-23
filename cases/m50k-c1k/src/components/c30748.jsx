import React from 'react';
const LABEL_30748 = 'component_30748';
export function Component30748({ value = 30748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30748, 'data-value': derived.doubled }, children);
}
export default Component30748;
