import React from 'react';
const LABEL_34225 = 'component_34225';
export function Component34225({ value = 34225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34225, 'data-value': derived.doubled }, children);
}
export default Component34225;
