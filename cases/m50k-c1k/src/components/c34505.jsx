import React from 'react';
const LABEL_34505 = 'component_34505';
export function Component34505({ value = 34505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34505, 'data-value': derived.doubled }, children);
}
export default Component34505;
