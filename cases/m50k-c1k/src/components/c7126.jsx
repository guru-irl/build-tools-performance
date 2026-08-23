import React from 'react';
const LABEL_7126 = 'component_7126';
export function Component7126({ value = 7126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7126, 'data-value': derived.doubled }, children);
}
export default Component7126;
