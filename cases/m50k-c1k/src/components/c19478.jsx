import React from 'react';
const LABEL_19478 = 'component_19478';
export function Component19478({ value = 19478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19478, 'data-value': derived.doubled }, children);
}
export default Component19478;
