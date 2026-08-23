import React from 'react';
const LABEL_41073 = 'component_41073';
export function Component41073({ value = 41073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41073, 'data-value': derived.doubled }, children);
}
export default Component41073;
