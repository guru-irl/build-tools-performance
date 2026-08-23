import React from 'react';
const LABEL_45681 = 'component_45681';
export function Component45681({ value = 45681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45681, 'data-value': derived.doubled }, children);
}
export default Component45681;
