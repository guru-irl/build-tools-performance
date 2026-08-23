import React from 'react';
const LABEL_19190 = 'component_19190';
export function Component19190({ value = 19190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19190, 'data-value': derived.doubled }, children);
}
export default Component19190;
