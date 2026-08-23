import React from 'react';
const LABEL_5401 = 'component_5401';
export function Component5401({ value = 5401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5401, 'data-value': derived.doubled }, children);
}
export default Component5401;
