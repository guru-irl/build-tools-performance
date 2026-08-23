import React from 'react';
const LABEL_14422 = 'component_14422';
export function Component14422({ value = 14422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14422, 'data-value': derived.doubled }, children);
}
export default Component14422;
