import React from 'react';
const LABEL_30194 = 'component_30194';
export function Component30194({ value = 30194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30194, 'data-value': derived.doubled }, children);
}
export default Component30194;
