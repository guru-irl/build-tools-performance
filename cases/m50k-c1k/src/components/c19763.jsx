import React from 'react';
const LABEL_19763 = 'component_19763';
export function Component19763({ value = 19763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19763, 'data-value': derived.doubled }, children);
}
export default Component19763;
