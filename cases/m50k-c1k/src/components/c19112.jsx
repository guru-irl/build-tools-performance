import React from 'react';
const LABEL_19112 = 'component_19112';
export function Component19112({ value = 19112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19112, 'data-value': derived.doubled }, children);
}
export default Component19112;
