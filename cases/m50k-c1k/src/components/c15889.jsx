import React from 'react';
const LABEL_15889 = 'component_15889';
export function Component15889({ value = 15889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15889, 'data-value': derived.doubled }, children);
}
export default Component15889;
