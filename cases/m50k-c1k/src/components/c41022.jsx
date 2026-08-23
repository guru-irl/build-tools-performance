import React from 'react';
const LABEL_41022 = 'component_41022';
export function Component41022({ value = 41022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41022, 'data-value': derived.doubled }, children);
}
export default Component41022;
