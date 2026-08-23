import React from 'react';
const LABEL_45560 = 'component_45560';
export function Component45560({ value = 45560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45560, 'data-value': derived.doubled }, children);
}
export default Component45560;
