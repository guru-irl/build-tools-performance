import React from 'react';
const LABEL_26818 = 'component_26818';
export function Component26818({ value = 26818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26818, 'data-value': derived.doubled }, children);
}
export default Component26818;
