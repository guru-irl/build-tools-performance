import React from 'react';
const LABEL_41544 = 'component_41544';
export function Component41544({ value = 41544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41544, 'data-value': derived.doubled }, children);
}
export default Component41544;
