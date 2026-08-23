import React from 'react';
const LABEL_19426 = 'component_19426';
export function Component19426({ value = 19426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19426, 'data-value': derived.doubled }, children);
}
export default Component19426;
