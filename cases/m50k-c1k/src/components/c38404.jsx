import React from 'react';
const LABEL_38404 = 'component_38404';
export function Component38404({ value = 38404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38404, 'data-value': derived.doubled }, children);
}
export default Component38404;
