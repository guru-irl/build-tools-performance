import React from 'react';
const LABEL_41028 = 'component_41028';
export function Component41028({ value = 41028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41028, 'data-value': derived.doubled }, children);
}
export default Component41028;
