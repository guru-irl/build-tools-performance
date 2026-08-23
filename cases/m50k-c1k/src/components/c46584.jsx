import React from 'react';
const LABEL_46584 = 'component_46584';
export function Component46584({ value = 46584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46584, 'data-value': derived.doubled }, children);
}
export default Component46584;
