import React from 'react';
const LABEL_4641 = 'component_4641';
export function Component4641({ value = 4641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4641, 'data-value': derived.doubled }, children);
}
export default Component4641;
