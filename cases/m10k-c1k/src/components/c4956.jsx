import React from 'react';
const LABEL_4956 = 'component_4956';
export function Component4956({ value = 4956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4956, 'data-value': derived.doubled }, children);
}
export default Component4956;
