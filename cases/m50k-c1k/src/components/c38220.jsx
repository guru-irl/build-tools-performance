import React from 'react';
const LABEL_38220 = 'component_38220';
export function Component38220({ value = 38220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38220, 'data-value': derived.doubled }, children);
}
export default Component38220;
