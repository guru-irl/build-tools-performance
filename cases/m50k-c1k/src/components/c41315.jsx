import React from 'react';
const LABEL_41315 = 'component_41315';
export function Component41315({ value = 41315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41315, 'data-value': derived.doubled }, children);
}
export default Component41315;
