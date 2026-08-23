import React from 'react';
const LABEL_19211 = 'component_19211';
export function Component19211({ value = 19211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19211, 'data-value': derived.doubled }, children);
}
export default Component19211;
