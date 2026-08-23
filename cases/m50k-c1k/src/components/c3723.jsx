import React from 'react';
const LABEL_3723 = 'component_3723';
export function Component3723({ value = 3723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3723, 'data-value': derived.doubled }, children);
}
export default Component3723;
