import React from 'react';
const LABEL_34462 = 'component_34462';
export function Component34462({ value = 34462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34462, 'data-value': derived.doubled }, children);
}
export default Component34462;
