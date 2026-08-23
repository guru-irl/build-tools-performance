import React from 'react';
const LABEL_956 = 'component_956';
export function Component956({ value = 956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_956, 'data-value': derived.doubled }, children);
}
export default Component956;
