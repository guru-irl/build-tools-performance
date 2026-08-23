import React from 'react';
const LABEL_41442 = 'component_41442';
export function Component41442({ value = 41442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41442, 'data-value': derived.doubled }, children);
}
export default Component41442;
