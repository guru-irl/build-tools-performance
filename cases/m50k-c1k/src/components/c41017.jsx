import React from 'react';
const LABEL_41017 = 'component_41017';
export function Component41017({ value = 41017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41017, 'data-value': derived.doubled }, children);
}
export default Component41017;
