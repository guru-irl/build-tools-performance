import React from 'react';
const LABEL_7629 = 'component_7629';
export function Component7629({ value = 7629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7629, 'data-value': derived.doubled }, children);
}
export default Component7629;
