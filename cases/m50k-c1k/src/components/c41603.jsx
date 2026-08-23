import React from 'react';
const LABEL_41603 = 'component_41603';
export function Component41603({ value = 41603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41603, 'data-value': derived.doubled }, children);
}
export default Component41603;
