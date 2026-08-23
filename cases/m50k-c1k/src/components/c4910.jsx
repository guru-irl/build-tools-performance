import React from 'react';
const LABEL_4910 = 'component_4910';
export function Component4910({ value = 4910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4910, 'data-value': derived.doubled }, children);
}
export default Component4910;
