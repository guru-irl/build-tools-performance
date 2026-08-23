import React from 'react';
const LABEL_34619 = 'component_34619';
export function Component34619({ value = 34619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34619, 'data-value': derived.doubled }, children);
}
export default Component34619;
