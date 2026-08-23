import React from 'react';
const LABEL_14021 = 'component_14021';
export function Component14021({ value = 14021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14021, 'data-value': derived.doubled }, children);
}
export default Component14021;
