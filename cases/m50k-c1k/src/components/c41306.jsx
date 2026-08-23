import React from 'react';
const LABEL_41306 = 'component_41306';
export function Component41306({ value = 41306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41306, 'data-value': derived.doubled }, children);
}
export default Component41306;
