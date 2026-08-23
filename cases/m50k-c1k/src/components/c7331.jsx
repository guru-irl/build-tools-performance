import React from 'react';
const LABEL_7331 = 'component_7331';
export function Component7331({ value = 7331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7331, 'data-value': derived.doubled }, children);
}
export default Component7331;
