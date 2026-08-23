import React from 'react';
const LABEL_5929 = 'component_5929';
export function Component5929({ value = 5929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5929, 'data-value': derived.doubled }, children);
}
export default Component5929;
