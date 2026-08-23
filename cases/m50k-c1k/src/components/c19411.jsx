import React from 'react';
const LABEL_19411 = 'component_19411';
export function Component19411({ value = 19411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19411, 'data-value': derived.doubled }, children);
}
export default Component19411;
