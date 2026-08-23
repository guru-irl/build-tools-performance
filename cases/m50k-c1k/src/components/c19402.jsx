import React from 'react';
const LABEL_19402 = 'component_19402';
export function Component19402({ value = 19402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19402, 'data-value': derived.doubled }, children);
}
export default Component19402;
