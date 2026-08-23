import React from 'react';
const LABEL_42223 = 'component_42223';
export function Component42223({ value = 42223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42223, 'data-value': derived.doubled }, children);
}
export default Component42223;
