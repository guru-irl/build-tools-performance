import React from 'react';
const LABEL_34351 = 'component_34351';
export function Component34351({ value = 34351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34351, 'data-value': derived.doubled }, children);
}
export default Component34351;
