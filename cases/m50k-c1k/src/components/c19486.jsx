import React from 'react';
const LABEL_19486 = 'component_19486';
export function Component19486({ value = 19486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19486, 'data-value': derived.doubled }, children);
}
export default Component19486;
