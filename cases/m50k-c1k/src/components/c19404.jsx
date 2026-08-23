import React from 'react';
const LABEL_19404 = 'component_19404';
export function Component19404({ value = 19404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19404, 'data-value': derived.doubled }, children);
}
export default Component19404;
