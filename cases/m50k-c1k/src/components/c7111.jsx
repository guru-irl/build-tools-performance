import React from 'react';
const LABEL_7111 = 'component_7111';
export function Component7111({ value = 7111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7111, 'data-value': derived.doubled }, children);
}
export default Component7111;
