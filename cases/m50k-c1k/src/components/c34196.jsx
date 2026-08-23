import React from 'react';
const LABEL_34196 = 'component_34196';
export function Component34196({ value = 34196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34196, 'data-value': derived.doubled }, children);
}
export default Component34196;
