import React from 'react';
const LABEL_19228 = 'component_19228';
export function Component19228({ value = 19228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19228, 'data-value': derived.doubled }, children);
}
export default Component19228;
