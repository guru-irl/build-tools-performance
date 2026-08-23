import React from 'react';
const LABEL_19621 = 'component_19621';
export function Component19621({ value = 19621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19621, 'data-value': derived.doubled }, children);
}
export default Component19621;
