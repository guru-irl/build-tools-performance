import React from 'react';
const LABEL_23570 = 'component_23570';
export function Component23570({ value = 23570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23570, 'data-value': derived.doubled }, children);
}
export default Component23570;
