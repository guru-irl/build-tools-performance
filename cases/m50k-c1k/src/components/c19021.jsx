import React from 'react';
const LABEL_19021 = 'component_19021';
export function Component19021({ value = 19021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19021, 'data-value': derived.doubled }, children);
}
export default Component19021;
