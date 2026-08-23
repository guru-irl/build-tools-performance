import React from 'react';
const LABEL_34404 = 'component_34404';
export function Component34404({ value = 34404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34404, 'data-value': derived.doubled }, children);
}
export default Component34404;
