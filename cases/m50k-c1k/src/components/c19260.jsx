import React from 'react';
const LABEL_19260 = 'component_19260';
export function Component19260({ value = 19260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19260, 'data-value': derived.doubled }, children);
}
export default Component19260;
