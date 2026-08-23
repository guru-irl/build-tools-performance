import React from 'react';
const LABEL_14560 = 'component_14560';
export function Component14560({ value = 14560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14560, 'data-value': derived.doubled }, children);
}
export default Component14560;
