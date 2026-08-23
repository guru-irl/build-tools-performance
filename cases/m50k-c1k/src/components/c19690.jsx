import React from 'react';
const LABEL_19690 = 'component_19690';
export function Component19690({ value = 19690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19690, 'data-value': derived.doubled }, children);
}
export default Component19690;
