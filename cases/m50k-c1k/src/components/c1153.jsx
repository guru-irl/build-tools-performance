import React from 'react';
const LABEL_1153 = 'component_1153';
export function Component1153({ value = 1153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1153, 'data-value': derived.doubled }, children);
}
export default Component1153;
