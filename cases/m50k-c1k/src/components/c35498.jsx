import React from 'react';
const LABEL_35498 = 'component_35498';
export function Component35498({ value = 35498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35498, 'data-value': derived.doubled }, children);
}
export default Component35498;
