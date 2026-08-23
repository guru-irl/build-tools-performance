import React from 'react';
const LABEL_7615 = 'component_7615';
export function Component7615({ value = 7615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7615, 'data-value': derived.doubled }, children);
}
export default Component7615;
