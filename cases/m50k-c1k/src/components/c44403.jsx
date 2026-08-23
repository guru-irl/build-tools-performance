import React from 'react';
const LABEL_44403 = 'component_44403';
export function Component44403({ value = 44403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44403, 'data-value': derived.doubled }, children);
}
export default Component44403;
