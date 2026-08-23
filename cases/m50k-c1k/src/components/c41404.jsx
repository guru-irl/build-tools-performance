import React from 'react';
const LABEL_41404 = 'component_41404';
export function Component41404({ value = 41404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41404, 'data-value': derived.doubled }, children);
}
export default Component41404;
