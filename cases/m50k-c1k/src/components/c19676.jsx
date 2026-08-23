import React from 'react';
const LABEL_19676 = 'component_19676';
export function Component19676({ value = 19676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19676, 'data-value': derived.doubled }, children);
}
export default Component19676;
