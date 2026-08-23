import React from 'react';
const LABEL_19290 = 'component_19290';
export function Component19290({ value = 19290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19290, 'data-value': derived.doubled }, children);
}
export default Component19290;
