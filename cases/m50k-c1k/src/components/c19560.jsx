import React from 'react';
const LABEL_19560 = 'component_19560';
export function Component19560({ value = 19560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19560, 'data-value': derived.doubled }, children);
}
export default Component19560;
