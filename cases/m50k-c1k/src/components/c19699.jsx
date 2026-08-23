import React from 'react';
const LABEL_19699 = 'component_19699';
export function Component19699({ value = 19699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19699, 'data-value': derived.doubled }, children);
}
export default Component19699;
