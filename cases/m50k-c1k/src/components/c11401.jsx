import React from 'react';
const LABEL_11401 = 'component_11401';
export function Component11401({ value = 11401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11401, 'data-value': derived.doubled }, children);
}
export default Component11401;
