import React from 'react';
const LABEL_13365 = 'component_13365';
export function Component13365({ value = 13365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13365, 'data-value': derived.doubled }, children);
}
export default Component13365;
