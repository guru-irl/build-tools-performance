import React from 'react';
const LABEL_41592 = 'component_41592';
export function Component41592({ value = 41592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41592, 'data-value': derived.doubled }, children);
}
export default Component41592;
