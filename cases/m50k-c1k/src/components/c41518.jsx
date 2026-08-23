import React from 'react';
const LABEL_41518 = 'component_41518';
export function Component41518({ value = 41518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41518, 'data-value': derived.doubled }, children);
}
export default Component41518;
