import React from 'react';
const LABEL_19648 = 'component_19648';
export function Component19648({ value = 19648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19648, 'data-value': derived.doubled }, children);
}
export default Component19648;
