import React from 'react';
const LABEL_41079 = 'component_41079';
export function Component41079({ value = 41079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41079, 'data-value': derived.doubled }, children);
}
export default Component41079;
