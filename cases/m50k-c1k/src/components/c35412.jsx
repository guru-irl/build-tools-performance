import React from 'react';
const LABEL_35412 = 'component_35412';
export function Component35412({ value = 35412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35412, 'data-value': derived.doubled }, children);
}
export default Component35412;
