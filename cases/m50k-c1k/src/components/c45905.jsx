import React from 'react';
const LABEL_45905 = 'component_45905';
export function Component45905({ value = 45905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45905, 'data-value': derived.doubled }, children);
}
export default Component45905;
