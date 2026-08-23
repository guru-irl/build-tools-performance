import React from 'react';
const LABEL_37472 = 'component_37472';
export function Component37472({ value = 37472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37472, 'data-value': derived.doubled }, children);
}
export default Component37472;
