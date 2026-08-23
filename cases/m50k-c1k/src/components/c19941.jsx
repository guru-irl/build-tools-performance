import React from 'react';
const LABEL_19941 = 'component_19941';
export function Component19941({ value = 19941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19941, 'data-value': derived.doubled }, children);
}
export default Component19941;
