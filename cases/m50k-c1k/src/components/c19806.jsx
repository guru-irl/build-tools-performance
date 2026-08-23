import React from 'react';
const LABEL_19806 = 'component_19806';
export function Component19806({ value = 19806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19806, 'data-value': derived.doubled }, children);
}
export default Component19806;
