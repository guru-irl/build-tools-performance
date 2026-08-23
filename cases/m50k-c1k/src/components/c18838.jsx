import React from 'react';
const LABEL_18838 = 'component_18838';
export function Component18838({ value = 18838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18838, 'data-value': derived.doubled }, children);
}
export default Component18838;
