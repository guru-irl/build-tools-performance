import React from 'react';
const LABEL_6956 = 'component_6956';
export function Component6956({ value = 6956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6956, 'data-value': derived.doubled }, children);
}
export default Component6956;
