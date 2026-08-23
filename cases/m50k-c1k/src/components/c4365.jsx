import React from 'react';
const LABEL_4365 = 'component_4365';
export function Component4365({ value = 4365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4365, 'data-value': derived.doubled }, children);
}
export default Component4365;
