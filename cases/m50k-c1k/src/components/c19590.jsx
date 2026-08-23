import React from 'react';
const LABEL_19590 = 'component_19590';
export function Component19590({ value = 19590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19590, 'data-value': derived.doubled }, children);
}
export default Component19590;
