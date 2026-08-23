import React from 'react';
const LABEL_4890 = 'component_4890';
export function Component4890({ value = 4890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4890, 'data-value': derived.doubled }, children);
}
export default Component4890;
