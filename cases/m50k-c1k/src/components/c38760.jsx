import React from 'react';
const LABEL_38760 = 'component_38760';
export function Component38760({ value = 38760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38760, 'data-value': derived.doubled }, children);
}
export default Component38760;
