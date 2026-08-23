import React from 'react';
const LABEL_19969 = 'component_19969';
export function Component19969({ value = 19969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19969, 'data-value': derived.doubled }, children);
}
export default Component19969;
