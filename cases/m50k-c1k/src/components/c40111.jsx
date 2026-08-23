import React from 'react';
const LABEL_40111 = 'component_40111';
export function Component40111({ value = 40111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40111, 'data-value': derived.doubled }, children);
}
export default Component40111;
