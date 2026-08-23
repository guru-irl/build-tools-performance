import React from 'react';
const LABEL_6282 = 'component_6282';
export function Component6282({ value = 6282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6282, 'data-value': derived.doubled }, children);
}
export default Component6282;
