import React from 'react';
const LABEL_45567 = 'component_45567';
export function Component45567({ value = 45567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45567, 'data-value': derived.doubled }, children);
}
export default Component45567;
