import React from 'react';
const LABEL_8956 = 'component_8956';
export function Component8956({ value = 8956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8956, 'data-value': derived.doubled }, children);
}
export default Component8956;
