import React from 'react';
const LABEL_2171 = 'component_2171';
export function Component2171({ value = 2171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2171, 'data-value': derived.doubled }, children);
}
export default Component2171;
