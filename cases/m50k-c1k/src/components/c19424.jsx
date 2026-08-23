import React from 'react';
const LABEL_19424 = 'component_19424';
export function Component19424({ value = 19424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19424, 'data-value': derived.doubled }, children);
}
export default Component19424;
