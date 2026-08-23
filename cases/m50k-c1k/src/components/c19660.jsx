import React from 'react';
const LABEL_19660 = 'component_19660';
export function Component19660({ value = 19660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19660, 'data-value': derived.doubled }, children);
}
export default Component19660;
