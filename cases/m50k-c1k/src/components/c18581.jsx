import React from 'react';
const LABEL_18581 = 'component_18581';
export function Component18581({ value = 18581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18581, 'data-value': derived.doubled }, children);
}
export default Component18581;
