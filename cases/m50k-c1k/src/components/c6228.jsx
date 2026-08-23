import React from 'react';
const LABEL_6228 = 'component_6228';
export function Component6228({ value = 6228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6228, 'data-value': derived.doubled }, children);
}
export default Component6228;
