import React from 'react';
const LABEL_16580 = 'component_16580';
export function Component16580({ value = 16580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16580, 'data-value': derived.doubled }, children);
}
export default Component16580;
