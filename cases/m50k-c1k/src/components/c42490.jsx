import React from 'react';
const LABEL_42490 = 'component_42490';
export function Component42490({ value = 42490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42490, 'data-value': derived.doubled }, children);
}
export default Component42490;
