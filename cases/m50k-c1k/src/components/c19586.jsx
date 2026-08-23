import React from 'react';
const LABEL_19586 = 'component_19586';
export function Component19586({ value = 19586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19586, 'data-value': derived.doubled }, children);
}
export default Component19586;
