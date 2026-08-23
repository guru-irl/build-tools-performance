import React from 'react';
const LABEL_34506 = 'component_34506';
export function Component34506({ value = 34506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34506, 'data-value': derived.doubled }, children);
}
export default Component34506;
