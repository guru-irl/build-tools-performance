import React from 'react';
const LABEL_45210 = 'component_45210';
export function Component45210({ value = 45210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45210, 'data-value': derived.doubled }, children);
}
export default Component45210;
