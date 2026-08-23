import React from 'react';
const LABEL_41075 = 'component_41075';
export function Component41075({ value = 41075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41075, 'data-value': derived.doubled }, children);
}
export default Component41075;
