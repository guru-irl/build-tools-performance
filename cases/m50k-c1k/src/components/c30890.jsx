import React from 'react';
const LABEL_30890 = 'component_30890';
export function Component30890({ value = 30890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30890, 'data-value': derived.doubled }, children);
}
export default Component30890;
