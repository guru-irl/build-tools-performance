import React from 'react';
const LABEL_36659 = 'component_36659';
export function Component36659({ value = 36659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36659, 'data-value': derived.doubled }, children);
}
export default Component36659;
