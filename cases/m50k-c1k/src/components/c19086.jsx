import React from 'react';
const LABEL_19086 = 'component_19086';
export function Component19086({ value = 19086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19086, 'data-value': derived.doubled }, children);
}
export default Component19086;
