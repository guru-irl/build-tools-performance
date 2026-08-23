import React from 'react';
const LABEL_34486 = 'component_34486';
export function Component34486({ value = 34486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34486, 'data-value': derived.doubled }, children);
}
export default Component34486;
