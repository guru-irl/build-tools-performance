import React from 'react';
const LABEL_35388 = 'component_35388';
export function Component35388({ value = 35388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35388, 'data-value': derived.doubled }, children);
}
export default Component35388;
