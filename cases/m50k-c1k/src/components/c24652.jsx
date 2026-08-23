import React from 'react';
const LABEL_24652 = 'component_24652';
export function Component24652({ value = 24652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24652, 'data-value': derived.doubled }, children);
}
export default Component24652;
