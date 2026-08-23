import React from 'react';
const LABEL_5365 = 'component_5365';
export function Component5365({ value = 5365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5365, 'data-value': derived.doubled }, children);
}
export default Component5365;
