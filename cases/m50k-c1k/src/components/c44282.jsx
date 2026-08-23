import React from 'react';
const LABEL_44282 = 'component_44282';
export function Component44282({ value = 44282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44282, 'data-value': derived.doubled }, children);
}
export default Component44282;
