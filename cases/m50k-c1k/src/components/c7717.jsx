import React from 'react';
const LABEL_7717 = 'component_7717';
export function Component7717({ value = 7717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7717, 'data-value': derived.doubled }, children);
}
export default Component7717;
