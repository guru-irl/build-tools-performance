import React from 'react';
const LABEL_41445 = 'component_41445';
export function Component41445({ value = 41445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41445, 'data-value': derived.doubled }, children);
}
export default Component41445;
