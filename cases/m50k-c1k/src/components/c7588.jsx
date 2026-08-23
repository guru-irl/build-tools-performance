import React from 'react';
const LABEL_7588 = 'component_7588';
export function Component7588({ value = 7588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7588, 'data-value': derived.doubled }, children);
}
export default Component7588;
