import React from 'react';
const LABEL_46401 = 'component_46401';
export function Component46401({ value = 46401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46401, 'data-value': derived.doubled }, children);
}
export default Component46401;
