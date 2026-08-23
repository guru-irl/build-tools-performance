import React from 'react';
const LABEL_19870 = 'component_19870';
export function Component19870({ value = 19870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19870, 'data-value': derived.doubled }, children);
}
export default Component19870;
