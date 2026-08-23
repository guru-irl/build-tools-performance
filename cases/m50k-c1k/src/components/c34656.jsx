import React from 'react';
const LABEL_34656 = 'component_34656';
export function Component34656({ value = 34656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34656, 'data-value': derived.doubled }, children);
}
export default Component34656;
