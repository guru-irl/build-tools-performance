import React from 'react';
const LABEL_41870 = 'component_41870';
export function Component41870({ value = 41870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41870, 'data-value': derived.doubled }, children);
}
export default Component41870;
