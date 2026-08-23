import React from 'react';
const LABEL_5388 = 'component_5388';
export function Component5388({ value = 5388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5388, 'data-value': derived.doubled }, children);
}
export default Component5388;
