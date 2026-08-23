import React from 'react';
const LABEL_41628 = 'component_41628';
export function Component41628({ value = 41628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41628, 'data-value': derived.doubled }, children);
}
export default Component41628;
