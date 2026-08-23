import React from 'react';
const LABEL_26365 = 'component_26365';
export function Component26365({ value = 26365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26365, 'data-value': derived.doubled }, children);
}
export default Component26365;
