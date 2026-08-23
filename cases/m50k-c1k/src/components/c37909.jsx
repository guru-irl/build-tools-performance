import React from 'react';
const LABEL_37909 = 'component_37909';
export function Component37909({ value = 37909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37909, 'data-value': derived.doubled }, children);
}
export default Component37909;
