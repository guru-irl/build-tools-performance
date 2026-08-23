import React from 'react';
const LABEL_8518 = 'component_8518';
export function Component8518({ value = 8518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8518, 'data-value': derived.doubled }, children);
}
export default Component8518;
