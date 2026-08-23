import React from 'react';
const LABEL_41785 = 'component_41785';
export function Component41785({ value = 41785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41785, 'data-value': derived.doubled }, children);
}
export default Component41785;
