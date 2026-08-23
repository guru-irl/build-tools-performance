import React from 'react';
const LABEL_7980 = 'component_7980';
export function Component7980({ value = 7980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7980, 'data-value': derived.doubled }, children);
}
export default Component7980;
