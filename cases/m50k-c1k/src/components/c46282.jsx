import React from 'react';
const LABEL_46282 = 'component_46282';
export function Component46282({ value = 46282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46282, 'data-value': derived.doubled }, children);
}
export default Component46282;
