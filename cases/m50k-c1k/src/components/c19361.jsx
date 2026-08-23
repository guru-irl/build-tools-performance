import React from 'react';
const LABEL_19361 = 'component_19361';
export function Component19361({ value = 19361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19361, 'data-value': derived.doubled }, children);
}
export default Component19361;
