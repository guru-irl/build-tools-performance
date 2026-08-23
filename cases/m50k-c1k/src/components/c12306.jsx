import React from 'react';
const LABEL_12306 = 'component_12306';
export function Component12306({ value = 12306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12306, 'data-value': derived.doubled }, children);
}
export default Component12306;
