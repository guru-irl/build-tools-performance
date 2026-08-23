import React from 'react';
const LABEL_19136 = 'component_19136';
export function Component19136({ value = 19136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19136, 'data-value': derived.doubled }, children);
}
export default Component19136;
