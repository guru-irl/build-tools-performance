import React from 'react';
const LABEL_42618 = 'component_42618';
export function Component42618({ value = 42618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42618, 'data-value': derived.doubled }, children);
}
export default Component42618;
