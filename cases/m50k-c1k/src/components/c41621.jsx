import React from 'react';
const LABEL_41621 = 'component_41621';
export function Component41621({ value = 41621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41621, 'data-value': derived.doubled }, children);
}
export default Component41621;
