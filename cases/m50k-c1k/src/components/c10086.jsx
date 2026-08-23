import React from 'react';
const LABEL_10086 = 'component_10086';
export function Component10086({ value = 10086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10086, 'data-value': derived.doubled }, children);
}
export default Component10086;
