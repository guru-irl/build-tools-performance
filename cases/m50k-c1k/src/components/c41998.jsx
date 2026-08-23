import React from 'react';
const LABEL_41998 = 'component_41998';
export function Component41998({ value = 41998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41998, 'data-value': derived.doubled }, children);
}
export default Component41998;
